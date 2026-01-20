document.addEventListener('DOMContentLoaded', () => {
    const config = SiteConfig.get();

    // Update page content
    document.title = `${config.businessName} - ${config.slogan}`;
    document.getElementById('nav-logo').textContent = `✨ ${config.businessName}`;
    document.getElementById('hero-title').textContent = config.businessName;
    document.getElementById('hero-subtitle').textContent = config.slogan;

    // Contact
    document.getElementById('contact-address').innerHTML = config.address.replace(/\n/g, '<br>');
    document.getElementById('contact-phone').textContent = config.phone;
    document.getElementById('contact-phone').href = `tel:${config.phone.replace(/\s/g, '')}`;
    document.getElementById('contact-email').textContent = config.email;
    document.getElementById('contact-email').href = `mailto:${config.email}`;

    // Map link
    const mapsQuery = encodeURIComponent(config.mapsQuery || `${config.businessName} ${config.address}`);
    document.getElementById('map-link').href = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

    // Footer
    document.getElementById('footer-name').textContent = `✨ ${config.businessName}`;
    document.getElementById('footer-copyright').textContent = config.businessName;

    // Mobile menu
    document.getElementById('nav-toggle').addEventListener('click', () => {
        document.getElementById('nav-menu').classList.toggle('active');
    });

    console.log('🚀 Site coiffeur initialisé');
});
