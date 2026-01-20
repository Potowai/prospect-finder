document.addEventListener('DOMContentLoaded', () => {
    const config = SiteConfig.get();
    document.title = `${config.businessName} - Dépannage Plomberie`;
    document.getElementById('contact-phone').textContent = config.phone;
    document.getElementById('contact-phone').href = `tel:${config.phone.replace(/\s/g, '')}`;
    document.getElementById('contact-address').innerHTML = config.address.replace(/\n/g, '<br>');
    document.getElementById('contact-email').textContent = config.email;
    document.getElementById('contact-email').href = `mailto:${config.email}`;
    document.getElementById('hero-phone').textContent = `📞 ${config.phone}`;
    document.getElementById('hero-phone').href = `tel:${config.phone.replace(/\s/g, '')}`;
    document.querySelectorAll('.nav-cta, .urgence .btn').forEach(btn => {
        btn.href = `tel:${config.phone.replace(/\s/g, '')}`;
    });
});
