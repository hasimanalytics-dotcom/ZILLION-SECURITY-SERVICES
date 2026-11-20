document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (menuBtn && mobileMenu) {
    let isOpen = false;
    menuBtn.addEventListener('click', () => {
      isOpen = !isOpen;
      mobileMenu.style.display = isOpen ? 'block' : 'none';
      menuIcon.innerHTML = isOpen ? closeIcon : menuIconHtml;
    });

    document.querySelectorAll('.mobile-menu a, .mobile-phone').forEach((link) => {
      link.addEventListener('click', () => {
        isOpen = false;
        mobileMenu.style.display = 'none';
        menuIcon.innerHTML = menuIconHtml;
      });
    });
  }

  const menuIconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
  const closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && (currentPath === href || href === 'index.html' && currentPath === '')) {
      link.classList.add('active');
    }
  });

  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      btnText.textContent = 'Sending...';
      setTimeout(() => {
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
        contactForm.reset();
        const section = contactForm.closest('section');
        section.innerHTML = `
          <div class="container">
            <div class="max-w-2xl mx-auto text-center py-20">
              <div class="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6 text-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2l-7 13.45 2.51 6.62L9.17 15 4 22l6.5-9.81L22 2z"></path></svg>
              </div>
              <h2 class="text-3xl font-bold mb-4">Message Sent!</h2>
              <p class="text-text-muted mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              <button onclick="location.reload()" class="btn btn-primary">Send Another Message</button>
            </div>
          </div>
        `;
      }, 1500);
    });
  }
});
