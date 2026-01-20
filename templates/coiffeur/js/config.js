const DEFAULT_CONFIG = {
    businessName: "Salon Demo",
    businessType: "coiffeur",
    slogan: "L'art de sublimer votre beauté naturelle",
    description: "Notre salon de coiffure vous accueille dans un espace chaleureux et moderne. Notre équipe de professionnels passionnés saura révéler toute votre beauté.",
    address: "123 Rue de la Beauté\n44000 Nantes",
    phone: "02 40 00 00 00",
    email: "contact@salon-demo.fr",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    mapsQuery: "Salon Demo Nantes"
};

const Config = {
    get() { const saved = localStorage.getItem('siteConfig'); return saved ? { ...DEFAULT_CONFIG, ...JSON.parse(saved) } : DEFAULT_CONFIG; },
    save(config) { localStorage.setItem('siteConfig', JSON.stringify(config)); },
    reset() { localStorage.removeItem('siteConfig'); return DEFAULT_CONFIG; }
};
window.SiteConfig = Config;
