/**
 * MAIN APPLICATION
 * Initialisation et interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

const App = {
    init() {
        this.loadConfig();
        this.initNavbar();
        this.initScrollEffects();
        Menu.init();
        console.log('🚀 Site initialisé');
    },

    // Charger la configuration
    loadConfig() {
        const config = SiteConfig.get();

        // Titre de la page
        document.title = `${config.businessName} - ${config.slogan}`;
        document.getElementById('page-title').textContent = document.title;

        // Meta description
        const metaDesc = document.getElementById('meta-description');
        if (metaDesc) metaDesc.content = config.description;

        // Navigation
        this.setText('nav-logo', config.businessName);

        // Hero
        this.setText('hero-title', config.businessName);
        this.setText('hero-subtitle', config.slogan);

        const heroPhone = document.getElementById('hero-phone');
        if (heroPhone) heroPhone.href = `tel:${config.phone.replace(/\s/g, '')}`;

        // About
        this.setText('about-description', config.description);

        // Contact
        this.setHtml('contact-address', config.address.replace(/\n/g, '<br>'));
        this.setText('contact-phone', config.phone);
        this.setText('contact-email', config.email);

        const phoneLink = document.getElementById('contact-phone');
        if (phoneLink) phoneLink.href = `tel:${config.phone.replace(/\s/g, '')}`;

        const emailLink = document.getElementById('contact-email');
        if (emailLink) emailLink.href = `mailto:${config.email}`;

        // Map
        const mapLink = document.getElementById('map-link');
        if (mapLink) {
            const mapsQuery = encodeURIComponent(config.mapsQuery || `${config.businessName} ${config.address}`);
            mapLink.href = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
        }

        // Horaires
        this.renderHours('hours-lunch', config.hours.lunch);
        this.renderHours('hours-dinner', config.hours.dinner);

        // Footer
        this.setText('footer-name', config.businessName);
        this.setText('footer-copyright', config.businessName);
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Réseaux sociaux
        this.setLink('social-facebook', config.facebook);
        this.setLink('social-instagram', config.instagram);
        this.setLink('social-tripadvisor', config.tripadvisor);
    },

    // Helpers
    setText(id, text) {
        const el = document.getElementById(id);
        if (el && text) el.textContent = text;
    },

    setHtml(id, html) {
        const el = document.getElementById(id);
        if (el && html) el.innerHTML = html;
    },

    setLink(id, url) {
        const el = document.getElementById(id);
        if (el && url) el.href = url;
    },

    renderHours(containerId, hoursArray) {
        const container = document.getElementById(containerId);
        if (!container || !hoursArray) return;

        container.innerHTML = hoursArray.map(h => `
            <div class="hours-row">
                <span>${h.days}</span>
                <span>${h.time}</span>
            </div>
        `).join('');
    },

    // Navbar
    initNavbar() {
        const navbar = document.getElementById('navbar');
        const toggle = document.getElementById('nav-toggle');
        const menu = document.getElementById('nav-menu');

        // Scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile toggle
        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                menu.classList.toggle('active');
            });

            // Close on link click
            menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('active');
                });
            });
        }
    },

    // Smooth scroll & animations
    initScrollEffects() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
};

// Check if PDF link is valid, otherwise show menu items
function checkPdfLink(link) {
    console.log('🔍 checkPdfLink called');
    const config = SiteConfig.get();
    const pdfUrl = config.menuPdfUrl;

    console.log('📄 Config:', config);
    console.log('📄 PDF URL:', pdfUrl);
    console.log('📄 PDF URL length:', pdfUrl ? pdfUrl.length : 0);
    console.log('📄 Starts with http:', pdfUrl ? pdfUrl.startsWith('http') : false);
    console.log('📄 Starts with data:', pdfUrl ? pdfUrl.startsWith('data:') : false);

    // If PDF URL is set and valid, open it
    if (pdfUrl && pdfUrl.startsWith('http')) {
        console.log('✅ Opening HTTP PDF...');
        window.open(pdfUrl, '_blank');
        return false;
    }

    // For data URLs, convert to Blob for better browser support
    if (pdfUrl && pdfUrl.startsWith('data:')) {
        console.log('✅ Converting data URL to Blob...');
        try {
            const base64Data = pdfUrl.split(',')[1];
            const byteCharacters = atob(base64Data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'application/pdf' });
            const blobUrl = URL.createObjectURL(blob);
            window.open(blobUrl, '_blank');
            return false;
        } catch (e) {
            // Error converting to blob, fall through to menu view
        }
    }

    // No valid PDF, switch to menu page view
    // Otherwise, switch to menu page view
    const userChoice = confirm('📄 Pas de PDF configuré.\n\nVoulez-vous voir le menu interactif à la place ?');

    if (userChoice) {
        // Switch to menu page mode
        config.menuType = 'page';
        SiteConfig.save(config);
        Menu.showMenuGrid();
    }

    return false; // Prevent default link behavior
}
