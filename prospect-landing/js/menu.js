/**
 * MENU DISPLAY & MANAGEMENT
 */

const Menu = {
    currentCategory: 'entrees',

    // Initialiser l'affichage du menu
    init() {
        const config = SiteConfig.get();

        if (config.menuType === 'page') {
            this.showMenuGrid();
        } else {
            this.showMenuPdf();
        }
    },

    // Afficher le menu en grille
    showMenuGrid() {
        const pdfSection = document.getElementById('menu-pdf-section');
        const gridSection = document.getElementById('menu-grid');
        const tabsSection = document.getElementById('menu-tabs');

        if (pdfSection) pdfSection.style.display = 'none';
        if (gridSection) gridSection.style.display = 'grid';
        if (tabsSection) tabsSection.style.display = 'flex';

        this.renderItems();
        this.initTabs();
    },

    // Afficher le bouton PDF
    showMenuPdf() {
        const config = SiteConfig.get();
        const pdfBtn = document.getElementById('menu-pdf-btn');

        if (pdfBtn) {
            pdfBtn.href = config.menuPdfUrl || 'assets/menu.pdf';
        }
    },

    // Rendre les items du menu
    renderItems(category = null) {
        const grid = document.getElementById('menu-grid');
        if (!grid) return;

        const items = category
            ? MenuData.getByCategory(category)
            : MenuData.getItems().filter(i => i.category === this.currentCategory);

        grid.innerHTML = items.map(item => `
            <div class="menu-item" data-id="${item.id}">
                <div class="menu-item-header">
                    <h4 class="menu-item-name">${this.escapeHtml(item.name)}</h4>
                    <span class="menu-item-price">${item.price.toFixed(2)} €</span>
                </div>
                <p class="menu-item-description">${this.escapeHtml(item.description)}</p>
            </div>
        `).join('');
    },

    // Initialiser les onglets de catégories
    initTabs() {
        const tabs = document.querySelectorAll('.menu-tab');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                this.currentCategory = tab.dataset.category;
                this.renderItems();
            });
        });
    },

    // Échapper le HTML
    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

// Export
window.Menu = Menu;
