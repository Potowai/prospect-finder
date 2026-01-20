/**
 * CONFIGURATION DU SITE
 * Modifiable par l'admin ou via l'interface
 */

// Configuration par défaut (peut être surchargée par localStorage)
const DEFAULT_CONFIG = {
    // Infos générales
    businessName: "Restaurant Demo",
    businessType: "restaurant", // restaurant, boulangerie, coiffeur, etc.
    slogan: "Cuisine traditionnelle française depuis 1990",
    description: "Bienvenue dans notre établissement, où la passion de la cuisine française se transmet depuis trois générations. Notre chef sélectionne chaque jour les meilleurs produits locaux pour vous offrir une expérience culinaire authentique et savoureuse.",

    // Contact
    address: "123 Rue de la Gastronomie\n44000 Nantes",
    phone: "02 40 00 00 00",
    email: "contact@restaurant-demo.fr",

    // Réseaux sociaux
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tripadvisor: "https://tripadvisor.com",

    // Menu
    menuType: "pdf", // "pdf" ou "page"
    menuPdfUrl: "assets/menu.pdf",

    // Google Maps
    mapsQuery: "Restaurant Demo Nantes",

    // Horaires
    hours: {
        lunch: [
            { days: "Lundi - Vendredi", time: "12h00 - 14h30" },
            { days: "Samedi - Dimanche", time: "12h00 - 15h00" }
        ],
        dinner: [
            { days: "Mardi - Samedi", time: "19h00 - 22h30" },
            { days: "Dimanche - Lundi", time: "Fermé" }
        ]
    }
};

// Menu items par défaut (pour option "page")
const DEFAULT_MENU_ITEMS = [
    {
        id: 1,
        category: "entrees",
        name: "Soupe à l'oignon gratinée",
        description: "Oignons caramélisés, bouillon de boeuf, croutons, gruyère fondu",
        price: 9.50
    },
    {
        id: 2,
        category: "entrees",
        name: "Salade de chèvre chaud",
        description: "Mesclun, toasts de chèvre, miel, noix",
        price: 12.00
    },
    {
        id: 3,
        category: "plats",
        name: "Boeuf Bourguignon",
        description: "Boeuf mijoté au vin rouge, carottes, champignons, pommes de terre",
        price: 24.00
    },
    {
        id: 4,
        category: "plats",
        name: "Filet de bar rôti",
        description: "Bar de ligne, légumes de saison, beurre blanc",
        price: 28.00
    },
    {
        id: 5,
        category: "desserts",
        name: "Crème brûlée",
        description: "Vanille de Madagascar, sucre caramélisé",
        price: 8.00
    },
    {
        id: 6,
        category: "desserts",
        name: "Tarte Tatin",
        description: "Pommes caramélisées, pâte feuilletée, crème fraîche",
        price: 9.00
    },
    {
        id: 7,
        category: "boissons",
        name: "Verre de vin rouge",
        description: "Sélection du moment",
        price: 6.00
    },
    {
        id: 8,
        category: "boissons",
        name: "Café gourmand",
        description: "Expresso, mini desserts du jour",
        price: 8.50
    }
];

// Fonctions de gestion de la configuration
const Config = {
    // Récupérer la config (localStorage ou défaut)
    get() {
        const saved = localStorage.getItem('siteConfig');
        if (saved) {
            return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
        }
        return DEFAULT_CONFIG;
    },

    // Sauvegarder la config
    save(config) {
        localStorage.setItem('siteConfig', JSON.stringify(config));
    },

    // Réinitialiser
    reset() {
        localStorage.removeItem('siteConfig');
        return DEFAULT_CONFIG;
    }
};

// Fonctions de gestion du menu
const MenuData = {
    // Récupérer les items
    getItems() {
        const saved = localStorage.getItem('menuItems');
        if (saved) {
            return JSON.parse(saved);
        }
        return DEFAULT_MENU_ITEMS;
    },

    // Sauvegarder les items
    saveItems(items) {
        localStorage.setItem('menuItems', JSON.stringify(items));
    },

    // Ajouter un item
    addItem(item) {
        const items = this.getItems();
        const newId = Math.max(...items.map(i => i.id), 0) + 1;
        items.push({ ...item, id: newId });
        this.saveItems(items);
        return items;
    },

    // Modifier un item
    updateItem(id, updates) {
        const items = this.getItems();
        const index = items.findIndex(i => i.id === id);
        if (index !== -1) {
            items[index] = { ...items[index], ...updates };
            this.saveItems(items);
        }
        return items;
    },

    // Supprimer un item
    deleteItem(id) {
        const items = this.getItems().filter(i => i.id !== id);
        this.saveItems(items);
        return items;
    },

    // Réinitialiser
    reset() {
        localStorage.removeItem('menuItems');
        return DEFAULT_MENU_ITEMS;
    },

    // Filtrer par catégorie
    getByCategory(category) {
        return this.getItems().filter(i => i.category === category);
    }
};

// Export pour utilisation dans d'autres fichiers
window.SiteConfig = Config;
window.MenuData = MenuData;
