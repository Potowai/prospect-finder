const DEFAULT_CONFIG = {
    businessName: "Boulangerie Demo",
    businessType: "boulangerie",
    slogan: "Le goût authentique du pain traditionnel depuis 1985",
    address: "123 Rue du Bon Pain\n44000 Nantes",
    phone: "02 40 00 00 00",
    mapsQuery: "Boulangerie Demo Nantes",
    menuPdfUrl: ""
};
const Config = {
    get() { const saved = localStorage.getItem('siteConfig'); return saved ? { ...DEFAULT_CONFIG, ...JSON.parse(saved) } : DEFAULT_CONFIG; },
    save(config) { localStorage.setItem('siteConfig', JSON.stringify(config)); }
};
window.SiteConfig = Config;
