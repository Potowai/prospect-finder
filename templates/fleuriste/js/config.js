const DEFAULT_CONFIG = {
    businessName: "Fleuriste Demo",
    businessType: "fleuriste",
    slogan: "L'art floral au service de vos émotions",
    address: "123 Rue des Fleurs\n44000 Nantes",
    phone: "02 40 00 00 00",
    mapsQuery: "Fleuriste Demo Nantes"
};
const Config = {
    get() { const saved = localStorage.getItem('siteConfig'); return saved ? { ...DEFAULT_CONFIG, ...JSON.parse(saved) } : DEFAULT_CONFIG; },
    save(config) { localStorage.setItem('siteConfig', JSON.stringify(config)); }
};
window.SiteConfig = Config;
