# 🎯 Prospect Finder - Landing Page Generator

Un outil complet pour scraper des prospects Google Maps et générer des landing pages personnalisées.

## 🚀 Fonctionnalités

### Scraper Google Maps
- Scrape automatique des commerces sur Google Maps
- Export vers SQLite avec déduplication
- Interface web pour visualiser les prospects
- Filtrage par catégorie et priorité (sans site web)

### Générateur de Landing Pages
5 templates inclus avec thèmes adaptés:

| Template | Couleur | Sections |
|----------|---------|----------|
| Restaurant | 🟡 Or | Menu PDF, Horaires |
| Coiffeur | 🩷 Rose Gold | Services, Galerie, Équipe |
| Boulangerie | 🟤 Marron | Produits, Spécialités |
| Plombier | 🔵 Bleu | Urgence, Garanties, Zone |
| Fleuriste | 💚 Vert | Créations, Occasions |

## 📁 Structure

```
prospect-finder/
├── prospect_scraper.py    # Script de scraping
├── index.html             # Interface prospects
├── prospects_nantes.db    # Base de données
├── prospect-landing/      # Template Restaurant
│   ├── index.html
│   ├── admin.html
│   ├── css/
│   └── js/
└── templates/
    ├── coiffeur/
    ├── boulangerie/
    ├── plombier/
    └── fleuriste/
```

## 🛠️ Installation

```bash
# Cloner le repo
git clone https://github.com/YOUR_USERNAME/prospect-finder.git

# Installer les dépendances Python
pip install selenium

# Lancer l'interface prospects
python -m http.server 8080
```

## 💻 Utilisation

### Scraper
```bash
python prospect_scraper.py
```

### Lancer un template
```bash
cd prospect-landing && python -m http.server 8081
# ou
cd templates/coiffeur && python -m http.server 8082
```

### Admin Panel
Chaque template a un `/admin.html` pour modifier:
- Nom et slogan
- Coordonnées
- Menu (PDF ou items)
- Horaires

## 🚀 Déploiement Netlify

```bash
cd prospect-landing
npx netlify-cli deploy --prod
```

## 📄 License

MIT
