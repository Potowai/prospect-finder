import sqlite3
import time
import random
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import TimeoutException, NoSuchElementException

class ProspectScraper:
    def __init__(self, db_name="prospects_nantes.db"):
        """Initialise le scraper et la base de données"""
        self.db_name = db_name
        self.init_database()
        self.driver = None
        
    def init_database(self):
        """Crée la base de données SQLite"""
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS prospects (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nom TEXT NOT NULL,
                categorie TEXT,
                adresse TEXT,
                telephone TEXT,
                site_web TEXT,
                email TEXT,
                note TEXT,
                a_un_site BOOLEAN DEFAULT 0,
                site_obsolete BOOLEAN DEFAULT 0,
                source TEXT,
                date_ajout TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(nom, adresse)
            )
        ''')
        
        conn.commit()
        conn.close()
        print(f"✓ Base de données '{self.db_name}' initialisée")
    
    def setup_driver(self, headless=False):
        """Configure le driver Selenium"""
        options = Options()
        if headless:
            options.add_argument('--headless')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--disable-blink-features=AutomationControlled')
        options.add_argument('user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
        
        self.driver = webdriver.Chrome(options=options)
        print("✓ Driver Selenium initialisé")
    
    def handle_consent_popup(self):
        """Gère le popup de consentement Google"""
        try:
            # Attendre que la page de consentement se charge
            time.sleep(3)
            
            # Chercher le bouton "Tout accepter" - c'est un input type=submit
            selectors = [
                'input[type="submit"][value="Tout accepter"]',
                'input[aria-label="Tout accepter"]',
                'input[type="submit"][value="Accept all"]',
                'input[aria-label="Accept all"]',
            ]
            
            button_found = False
            for selector in selectors:
                try:
                    buttons = self.driver.find_elements(By.CSS_SELECTOR, selector)
                    if buttons:
                        button = buttons[0]
                        # Scroller vers le bouton
                        self.driver.execute_script("arguments[0].scrollIntoView(true);", button)
                        time.sleep(1)
                        # Cliquer avec JavaScript pour plus de fiabilité
                        self.driver.execute_script("arguments[0].click();", button)
                        print("✓ Popup de consentement accepté")
                        button_found = True
                        time.sleep(2)
                        break
                except:
                    continue
            
            if not button_found:
                print("⚠ Pas de popup de consentement trouvé")
                    
        except Exception as e:
            print(f"⚠ Erreur lors de la gestion du consentement: {str(e)}")
    
    def scrape_google_maps(self, query, ville="Nantes", max_results=50):
        """Scrape Google Maps pour une requête donnée"""
        if not self.driver:
            self.setup_driver()
        
        search_query = f"{query} {ville}"
        print(f"\n🔍 Recherche: {search_query}")
        
        # Utiliser l'URL de recherche directe
        import urllib.parse
        encoded_query = urllib.parse.quote(search_query)
        search_url = f"https://www.google.com/maps/search/?api=1&query={encoded_query}"
        self.driver.get(search_url)
        time.sleep(2)
        
        # Gérer le popup de consentement (apparaît après la redirection)
        self.handle_consent_popup()
        time.sleep(2)
        
        try:
            # Scroll pour charger plus de résultats
            results_panel = WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, '[role="feed"]'))
            )
            
            prospects_found = []
            scroll_count = 0
            max_scrolls = 10
            
            while scroll_count < max_scrolls and len(prospects_found) < max_results:
                # Récupérer les éléments actuels
                elements = self.driver.find_elements(By.CSS_SELECTOR, 'div[role="article"]')
                
                for element in elements:
                    if len(prospects_found) >= max_results:
                        break
                    
                    try:
                        # Cliquer sur l'élément pour obtenir les détails
                        element.click()
                        time.sleep(random.uniform(1, 2))
                        
                        prospect = self.extract_business_info(query)
                        
                        if prospect and prospect['nom']:
                            prospects_found.append(prospect)
                            self.save_prospect(prospect)
                            print(f"  ✓ {prospect['nom']} - {prospect.get('telephone', 'N/A')}")
                        
                    except Exception as e:
                        continue
                
                # Scroll dans le panneau de résultats
                self.driver.execute_script('arguments[0].scrollTop = arguments[0].scrollHeight', results_panel)
                time.sleep(2)
                scroll_count += 1
            
            print(f"✓ {len(prospects_found)} prospects trouvés pour '{query}'")
            return prospects_found
            
        except Exception as e:
            print(f"❌ Erreur lors du scraping: {str(e)}")
            return []
    
    def extract_business_info(self, categorie):
        """Extrait les informations d'un commerce depuis Google Maps"""
        prospect = {
            'nom': None,
            'categorie': categorie,
            'adresse': None,
            'telephone': None,
            'site_web': None,
            'note': None,
            'a_un_site': False,
            'site_obsolete': False,
            'source': 'Google Maps'
        }
        
        try:
            # Nom
            try:
                nom = self.driver.find_element(By.CSS_SELECTOR, 'h1.DUwDvf').text
                prospect['nom'] = nom
            except:
                pass
            
            # Adresse
            try:
                adresse = self.driver.find_element(By.CSS_SELECTOR, 'button[data-item-id="address"]').text
                prospect['adresse'] = adresse
            except:
                pass
            
            # Téléphone
            try:
                tel = self.driver.find_element(By.CSS_SELECTOR, 'button[data-item-id^="phone"]').text
                prospect['telephone'] = tel.replace('Téléphone: ', '')
            except:
                pass
            
            # Site web
            try:
                site = self.driver.find_element(By.CSS_SELECTOR, 'a[data-item-id="authority"]')
                site_url = site.get_attribute('href')
                prospect['site_web'] = site_url
                prospect['a_un_site'] = True
                
                # Note si le site semble obsolète (critères basiques)
                if site_url:
                    if 'wix.com' in site_url or 'wordpress.com' in site_url:
                        prospect['note'] = "Site gratuit, potentiel d'amélioration"
                
            except:
                prospect['note'] = "Pas de site web - Prospect prioritaire!"
            
        except Exception as e:
            print(f"    ⚠ Erreur extraction: {str(e)}")
        
        return prospect
    
    def save_prospect(self, prospect):
        """Sauvegarde un prospect dans la base de données"""
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        
        try:
            cursor.execute('''
                INSERT INTO prospects (nom, categorie, adresse, telephone, site_web, 
                                     email, note, a_un_site, site_obsolete, source)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                prospect['nom'],
                prospect['categorie'],
                prospect['adresse'],
                prospect['telephone'],
                prospect['site_web'],
                prospect.get('email'),
                prospect['note'],
                prospect['a_un_site'],
                prospect['site_obsolete'],
                prospect['source']
            ))
            conn.commit()
        except sqlite3.IntegrityError:
            pass  # Prospect déjà existant
        finally:
            conn.close()
    
    def run_prospection(self, categories, ville="Nantes", max_per_category=30):
        """Lance la prospection pour plusieurs catégories"""
        print(f"\n{'='*60}")
        print(f"🚀 DÉMARRAGE DE LA PROSPECTION - {ville}")
        print(f"{'='*60}\n")
        
        self.setup_driver(headless=False)  # Mettre True pour mode invisible
        
        total_prospects = 0
        
        for categorie in categories:
            prospects = self.scrape_google_maps(categorie, ville, max_per_category)
            total_prospects += len(prospects)
            time.sleep(random.uniform(3, 5))  # Pause entre catégories
        
        self.driver.quit()
        
        print(f"\n{'='*60}")
        print(f"✅ PROSPECTION TERMINÉE")
        print(f"📊 Total: {total_prospects} prospects ajoutés")
        print(f"💾 Base de données: {self.db_name}")
        print(f"{'='*60}\n")
    
    def export_prospects_sans_site(self):
        """Exporte les prospects sans site web"""
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT nom, categorie, adresse, telephone, note
            FROM prospects
            WHERE a_un_site = 0
            ORDER BY categorie, nom
        ''')
        
        prospects = cursor.fetchall()
        conn.close()
        
        print(f"\n{'='*60}")
        print(f"🎯 PROSPECTS SANS SITE WEB ({len(prospects)})")
        print(f"{'='*60}\n")
        
        for p in prospects:
            print(f"📌 {p[0]}")
            print(f"   Catégorie: {p[1]}")
            print(f"   Adresse: {p[2]}")
            print(f"   Téléphone: {p[3]}")
            print(f"   Note: {p[4]}\n")
        
        return prospects


# UTILISATION
if __name__ == "__main__":
    # Catégories à prospecter
    categories = [
        "coiffeur",
        "plombier",
        "électricien",
        "restaurant",
        "boulangerie",
        "fleuriste",
        "coach sportif",
        "esthéticienne",
        "menuisier",
        "traiteur"
    ]
    
    # Créer le scraper
    scraper = ProspectScraper("prospects_nantes.db")
    
    # Lancer la prospection
    scraper.run_prospection(categories, ville="Nantes", max_per_category=20)
    
    # Exporter les meilleurs prospects (sans site)
    scraper.export_prospects_sans_site()
