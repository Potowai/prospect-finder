document.addEventListener('DOMContentLoaded', () => {
    const config = SiteConfig.get();
    document.title = `${config.businessName} - Créations Florales`;
    document.getElementById('contact-address').innerHTML = config.address.replace(/\n/g, '<br>');
    document.getElementById('contact-phone').textContent = config.phone;
    document.getElementById('contact-phone').href = `tel:${config.phone.replace(/\s/g, '')}`;
    document.getElementById('hero-phone').href = `tel:${config.phone.replace(/\s/g, '')}`;
    const mapsQuery = encodeURIComponent(config.mapsQuery || `${config.businessName} ${config.address}`);
    document.getElementById('map-link').href = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
    document.querySelector('.nav-toggle').addEventListener('click', () => document.querySelector('.nav-menu').classList.toggle('active'));
});
