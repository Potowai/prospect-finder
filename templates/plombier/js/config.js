const DEFAULT_CONFIG = {
    businessName: "Plombier Demo",
    businessType: "plombier",
    slogan: "Intervention en moins d'1h sur Nantes et sa région",
    address: "123 Rue de la Plomberie\n44000 Nantes",
    phone: "02 40 00 00 00",
    email: "contact@plombier-demo.fr",
    mapsQuery: "Plombier Demo Nantes"
};
const Config = {
    get() { const saved = localStorage.getItem('siteConfig'); return saved ? { ...DEFAULT_CONFIG, ...JSON.parse(saved) } : DEFAULT_CONFIG; },
    save(config) { localStorage.setItem('siteConfig', JSON.stringify(config)); }
};
window.SiteConfig = Config;
