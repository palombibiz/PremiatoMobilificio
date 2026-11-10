(() => {
  const form = document.querySelector('#lead-form');
  const status = document.querySelector('#form-status');

  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();
      const phone = String(data.get('phone') || '').trim();
      const email = String(data.get('email') || '').trim();
      const subject = 'Consulenza cucina - promozione 50%';
      const body =
        `Salve, vorrei ricevere una consulenza per una nuova cucina con lo sconto del 50% previsto dalla promozione anniversario. Vorrei conoscere meglio l'offerta, le condizioni e la disponibilità.\n\nNome: ${name}\nTelefono: ${phone}\nEmail: ${email || 'non indicata'}\n\nGrazie, vorrei essere ricontattato.`;
      const gmailUrl = new URL('https://mail.google.com/mail/');
      gmailUrl.search = new URLSearchParams({
        view: 'cm',
        fs: '1',
        to: 'info@premiatomobilificio.it',
        su: subject,
        body,
      }).toString();

      status.textContent = 'Si sta aprendo Gmail con la tua richiesta pronta da inviare.';
      window.open(gmailUrl.toString(), '_blank', 'noopener,noreferrer');
    });
  }

  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const answer = document.getElementById(button.getAttribute('aria-controls'));
      const toggle = button.querySelector('.faq-toggle');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isExpanded));
      answer.hidden = isExpanded;
      toggle.textContent = isExpanded ? '+' : '−';
    });
  });
})();

