document.addEventListener('DOMContentLoaded', () => {
    const config = SiteConfig.get();
    document.title = `${config.businessName} - ${config.slogan}`;
    document.getElementById('contact-address').innerHTML = config.address.replace(/\n/g, '<br>');
    document.getElementById('contact-phone').textContent = config.phone;
    document.getElementById('contact-phone').href = `tel:${config.phone.replace(/\s/g, '')}`;
    const mapsQuery = encodeURIComponent(config.mapsQuery || `${config.businessName} ${config.address}`);
    document.getElementById('map-link').href = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
    document.querySelector('.nav-toggle').addEventListener('click', () => document.querySelector('.nav-menu').classList.toggle('active'));
});
function openMenu() {
    const config = SiteConfig.get();
    if (config.menuPdfUrl && config.menuPdfUrl.startsWith('data:')) {
        const base64 = config.menuPdfUrl.split(',')[1];
        const bytes = atob(base64);
        const arr = new Uint8Array(bytes.length);
        for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i);
        const blob = new Blob([arr], { type: 'application/pdf' });
        window.open(URL.createObjectURL(blob), '_blank');
        return false;
    } else if (config.menuPdfUrl && config.menuPdfUrl.startsWith('http')) {
        window.open(config.menuPdfUrl, '_blank');
        return false;
    }
    alert('Pas de carte PDF configurée');
    return false;
}
