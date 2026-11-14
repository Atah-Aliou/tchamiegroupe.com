const whatsappLink = document.createElement('a');
whatsappLink.className = 'whatsapp-float';
whatsappLink.href =
    `https://wa.me/22890783001?text=${encodeURIComponent('Bonjour TCHAMIE GROUP, je souhaite obtenir plus d’informations sur vos services.')}`;
whatsappLink.target = '_blank';
whatsappLink.rel = 'noopener noreferrer';
whatsappLink.setAttribute('aria-label', 'Discuter avec TCHAMIE GROUP sur WhatsApp');
whatsappLink.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 11.5a7.5 7.5 0 0 1-11.2 6.5L4 19l1-4.1A7.5 7.5 0 1 1 20 11.5Z"></path>
        <path d="M9 10.2c.4 1.4 1.5 2.5 2.9 2.9l1.1-.9c.2-.2.5-.2.8-.1l1.3.6"></path>
    </svg>
    <span>Discuter sur WhatsApp</span>`;
document.body.append(whatsappLink);
