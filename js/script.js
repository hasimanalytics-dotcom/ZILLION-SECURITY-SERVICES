document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    const menuSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    const closeSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    let isOpen = false;
    menuBtn.addEventListener('click', () => {
      isOpen = !isOpen;
      mobileMenu.style.display = isOpen ? 'block' : 'none';
      menuBtn.innerHTML = isOpen ? closeSvg : menuSvg;
    });

    document.querySelectorAll('.mobile-menu a, .mobile-phone').forEach((link) => {
      link.addEventListener('click', () => {
        isOpen = false;
        mobileMenu.style.display = 'none';
        menuBtn.innerHTML = menuSvg;
      });
    });
  }

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
            <div style="max-width:700px; margin:0 auto; text-align:center; padding:80px 0;">
              <div style="width:64px; height:64px; border-radius:50%; background:rgba(16,185,129,0.12); display:flex; align-items:center; justify-content:center; margin:0 auto 24px; color:var(--success);">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2l-7 13.45 2.51 6.62L9.17 15 4 22l6.5-9.81L22 2z"></path></svg>
              </div>
              <h2 style="font-size:2rem; font-weight:700; color:var(--primary); margin-bottom:16px;">Message Sent!</h2>
              <p style="color:var(--text-muted); margin-bottom:24px;">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              <button onclick="location.reload()" class="btn btn-primary">Send Another Message</button>
            </div>
          </div>
        `;
      }, 1500);
    });
  }
});
