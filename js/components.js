import heroImageUrl from '../assets/hero-composition.webp';
import slideEntranceUrl from '../assets/hero-slide-entrance.webp';
import slideDuoUrl from '../assets/hero-slide-duo.webp';
import slideGuardsUrl from '../assets/hero-slide-guards.webp';

(function () {
  const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>';
  const envelopeIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>';
  const userIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path></svg>';
  const menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
  const phoneIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>';

  const socials = [
    ['LinkedIn', '<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"></path>'],
    ['Facebook', '<path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07z"></path>'],
    ['Instagram', '<path d="M12 2.16c3.2 0 3.58 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.41.69.81.9 1.37.17.42.36 1.05.42 2.22.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.9 3.9 0 0 1-.9 1.38 3.9 3.9 0 0 1-1.38.9c-.42.17-1.05.36-2.22.42-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.9 3.9 0 0 1-1.38-.9 3.9 3.9 0 0 1-.9-1.38c-.17-.42-.36-1.05-.42-2.22C2.17 15.58 2.16 15.2 2.16 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.41-.42.81-.69 1.37-.9.42-.17 1.05-.36 2.22-.42C8.42 2.17 8.8 2.16 12 2.16zM12 7.84A4.16 4.16 0 1 0 12 16.16 4.16 4.16 0 0 0 12 7.84zm5.84-2a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92z"></path>'],
    ['YouTube', '<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"></path>'],
    ['X', '<path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.2l-4.9-6.4L6.4 22H3.3l7.3-8.3L2.4 2h6.4l4.4 5.8L18.9 2Zm-1.1 18h1.7L7.5 3.9H5.7L17.8 20Z"></path>']
  ];

  const links = [
    ['Services', 'services.html'],
    ['Industries', 'industries.html'],
    ['Resources', 'index.html', 'resources'],
    ['Offices', 'contact.html', 'offices'],
    ['About Us', 'about.html'],
    ['Careers', 'contact.html', 'careers']
  ];

  const heroSlides = [
    {
      image: slideEntranceUrl,
      alt: 'Security professional at a modern corporate glass entrance',
      lines: ['SECURITY YOU CAN TRUST.', 'PROTECTION YOU CAN COUNT ON.']
    },
    {
      image: slideDuoUrl,
      alt: 'Two trained security guards on duty',
      lines: ['YOUR WORLD.', 'OUR RESPONSIBILITY.']
    },
    {
      image: slideGuardsUrl,
      alt: 'Professional security guards standing ready',
      lines: ['A SAFER TOMORROW', 'STARTS WITH US.']
    },
    {
      image: slideGuardsUrl,
      alt: 'Zillion Security guards representing trust and protection',
      lines: ['BEYOND SECURITY.', 'BUILDING TRUST.']
    }
  ];

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function currentPage() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (path.endsWith('/') || /(^|\/)index\.html$/.test(path)) return 'index.html';
    const parts = path.split('/');
    return parts[parts.length - 1] || 'index.html';
  }

  function showToast(message) {
    let toast = document.querySelector('.corp-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'corp-toast';
      toast.setAttribute('role', 'status');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.hidden = false;
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(function () {
      toast.hidden = true;
    }, 3600);
  }

  function clearHighlights(root) {
    root.querySelectorAll('mark.corp-search-mark').forEach(function (mark) {
      const parent = mark.parentNode;
      if (!parent) return;
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
      parent.normalize();
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.querySelector('input').value.trim();
    if (!query) {
      showToast('Enter a search term.');
      return;
    }

    const scope = document.querySelector('main') || document.body;
    clearHighlights(scope);
    const needle = query.toLowerCase();
    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest('site-topbar, site-nav, .corp-login, .corp-toast, script, style, mark')) {
          return NodeFilter.FILTER_REJECT;
        }
        return node.nodeValue.toLowerCase().indexOf(needle) === -1
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    });

    const found = [];
    let node;
    while ((node = walker.nextNode())) found.push(node);
    if (!found.length) {
      showToast('No results for "' + query + '".');
      return;
    }

    let firstMark = null;
    found.forEach(function (textNode, index) {
      const text = textNode.nodeValue;
      const position = text.toLowerCase().indexOf(needle);
      const before = document.createTextNode(text.slice(0, position));
      const mark = document.createElement('mark');
      mark.className = 'corp-search-mark';
      mark.textContent = text.slice(position, position + needle.length);
      const after = document.createTextNode(text.slice(position + needle.length));
      const fragment = document.createDocumentFragment();
      fragment.appendChild(before);
      fragment.appendChild(mark);
      fragment.appendChild(after);
      textNode.parentNode.replaceChild(fragment, textNode);
      if (index === 0) firstMark = mark;
    });

    if (firstMark) firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
    showToast(found.length + ' result' + (found.length === 1 ? '' : 's') + ' for "' + query + '".');
  }

  function ensureLogin() {
    let modal = document.querySelector('.corp-login');
    if (modal) return modal;
    modal = document.createElement('div');
    modal.className = 'corp-login';
    modal.hidden = true;
    modal.innerHTML =
      '<div class="corp-login__dialog" role="dialog" aria-modal="true" aria-labelledby="corpLoginTitle">' +
      '<button type="button" class="corp-login__close" data-login-close aria-label="Close login">&times;</button>' +
      '<h2 id="corpLoginTitle">Client login</h2>' +
      '<p>Access your Zillion Security client portal.</p>' +
      '<form data-login-form>' +
      '<label>Email<input type="email" name="email" required autocomplete="username" /></label>' +
      '<label>Password<input type="password" name="password" required autocomplete="current-password" /></label>' +
      '<button class="corp-login__submit" type="submit">Sign in</button>' +
      '</form></div>';
    document.body.appendChild(modal);

    const close = function () {
      modal.hidden = true;
      document.body.style.overflow = '';
    };

    modal.querySelector('[data-login-close]').addEventListener('click', close);
    modal.addEventListener('mousedown', function (event) {
      if (event.target === modal) close();
    });
    modal.addEventListener('keydown', function (event) {
      if (event.key === 'Tab') {
        const focusable = modal.querySelectorAll('button, input');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
    modal.querySelector('[data-login-form]').addEventListener('submit', function (event) {
      event.preventDefault();
      event.currentTarget.reset();
      close();
      showToast('Client portal sign-in is not connected in this demo.');
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !modal.hidden) close();
    });
    return modal;
  }

  class SiteTopbar extends HTMLElement {
    connectedCallback() {
      const socialMarkup = socials.map(function (item) {
        return '<a href="#" aria-label="' + item[0] + '" title="' + item[0] + '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' + item[1] + '</svg></a>';
      }).join('');

      this.innerHTML =
        '<div class="corp-topbar"><div class="corp-topbar__inner">' +
        '<form class="corp-search" role="search">' +
        '<input type="search" name="q" aria-label="Search" placeholder="Search our services" autocomplete="off" />' +
        '<button type="submit" aria-label="Search">' + searchIcon + '</button>' +
        '</form>' +
        '<div class="corp-socials">' + socialMarkup + '</div>' +
        '<div class="corp-contact">' +
        '<a class="corp-contact__cta" href="contact.html">' + envelopeIcon + '<span>CONTACT US</span></a>' +
        '<button class="corp-contact__login" type="button" data-login>' + userIcon + '<span>LOGIN</span></button>' +
        '</div></div></div>';

      this.querySelector('.corp-search').addEventListener('submit', handleSearch);
      this.querySelector('[data-login]').addEventListener('click', function () {
        const modal = ensureLogin();
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
        modal.querySelector('input').focus();
      });
    }
  }

  class SiteNav extends HTMLElement {
    connectedCallback() {
      const page = currentPage();
      const buildLink = function (item) {
        const active = page === item[1] || (item[2] && page === 'index.html' && item[1] === 'index.html');
        const href = item[2] ? item[1] + '#' + item[2] : item[1];
        return '<a href="' + href + '"' + (active ? ' class="is-active" aria-current="page"' : '') + '>' + escapeHtml(item[0]) + '</a>';
      };

      this.innerHTML =
        '<nav class="corp-nav"><div class="corp-nav__inner">' +
        '<a class="corp-brand" href="index.html" aria-label="Zillion Security Services home">' +
        '<img src="assets/zillion-security-services-logo.svg" alt="Zillion Security Services" />' +
        '</a>' +
        '<div class="corp-links">' + links.map(buildLink).join('') + '</div>' +
        '<button class="corp-menu-btn" id="menuBtn" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobileMenu">' + menuIcon + '</button>' +
        '</div>' +
        '<div class="corp-mobile" id="mobileMenu"><div class="corp-mobile__inner">' +
        '<a href="index.html">Home</a>' + links.map(buildLink).join('') +
        '<div class="corp-mobile__phone">' + phoneIcon + '<span>(800) 555-0199</span></div>' +
        '</div></div></nav>';
    }
  }

  class SiteHero extends HTMLElement {
    connectedCallback() {
      if (this.getAttribute('slides') === 'true') {
        this.renderSlides();
        return;
      }

      const raw = this.getAttribute('headline') || "READY FOR|WHAT'S NEXT";
      const lines = raw.indexOf('|') !== -1 ? raw.split('|') : raw.split(/,\s*/);
      const headline = lines.map(function (line) {
        return '<span>' + escapeHtml(line.trim()) + '</span>';
      }).join('');
      const statement = escapeHtml(this.getAttribute('statement') || 'Your trusted partner in creating value');
      const image = escapeHtml(this.getAttribute('image') || heroImageUrl);

      this.innerHTML =
        '<section class="hero corp-hero"><div class="corp-hero__inner">' +
        '<div class="corp-hero__copy animate delay-1">' +
        '<span class="corp-hero__eyebrow">Zillion Security Services</span>' +
        '<h1>' + headline + '</h1>' +
        '</div>' +
        '<div class="corp-hero__statement animate delay-2"><p>' + statement + '</p></div>' +
        '<div class="corp-hero__visual animate-zoom delay-3">' +
        '<img src="' + image + '" alt="Security professional with surveillance technology and modern commercial infrastructure" width="616" height="578" fetchpriority="high" decoding="async" />' +
        '</div></div></section>';
    }

    renderSlides() {
      const images = heroSlides.map(function (slide, index) {
        return '<div class="corp-slide__image' + (index === 0 ? ' is-active' : '') + '" style="background-image:url(\'' + slide.image + '\')" role="img" aria-label="' + escapeHtml(slide.alt) + '"></div>';
      }).join('');
      const dots = heroSlides.map(function (slide, index) {
        return '<button type="button" class="corp-slides__dot' + (index === 0 ? ' is-active' : '') + '" data-slide="' + index + '" aria-label="Show slide ' + (index + 1) + ': ' + escapeHtml(slide.lines.join(' ')) + '"' + (index === 0 ? ' aria-current="true"' : '') + '></button>';
      }).join('');

      this.innerHTML =
        '<section class="hero corp-hero corp-hero--slides"><div class="corp-slides" aria-roledescription="carousel" aria-label="Zillion Security commitments">' +
        '<div class="corp-slides__media" aria-hidden="true">' + images + '</div>' +
        '<div class="corp-slides__inner"><div class="corp-slides__copy">' +
        '<span class="corp-hero__eyebrow">Zillion Security Services</span>' +
        '<div class="corp-slides__text"><h1>' + heroSlides[0].lines.map(function (line) { return '<span>' + escapeHtml(line) + '</span>'; }).join('') + '</h1></div>' +
        '<div class="corp-slides__controls"><div class="corp-slides__dots">' + dots + '</div>' +
        '<span class="corp-slides__count">01 / ' + String(heroSlides.length).padStart(2, '0') + '</span></div>' +
        '</div></div></div></section>';

      const root = this.querySelector('.corp-slides');
      const text = root.querySelector('.corp-slides__text');
      const headline = root.querySelector('h1');
      const slideImages = root.querySelectorAll('.corp-slide__image');
      const dotButtons = root.querySelectorAll('.corp-slides__dot');
      const count = root.querySelector('.corp-slides__count');
      let current = 0;
      let timer = null;

      function headlineMarkup(index) {
        return heroSlides[index].lines.map(function (line) {
          return '<span>' + escapeHtml(line) + '</span>';
        }).join('');
      }

      function stop() {
        if (timer) window.clearInterval(timer);
        timer = null;
      }

      function next() {
        activate((current + 1) % heroSlides.length);
      }

      function previous() {
        activate((current - 1 + heroSlides.length) % heroSlides.length);
      }

      function activate(index) {
        if (index === current) return;
        text.classList.add('is-leaving');
        window.setTimeout(function () {
          headline.innerHTML = headlineMarkup(index);
          text.classList.remove('is-leaving');
          text.classList.add('is-entering');
          window.setTimeout(function () {
            text.classList.remove('is-entering');
          }, 620);
        }, 240);
        slideImages.forEach(function (image, slideIndex) {
          image.classList.toggle('is-active', slideIndex === index);
        });
        dotButtons.forEach(function (dot, slideIndex) {
          dot.classList.toggle('is-active', slideIndex === index);
          if (slideIndex === index) dot.setAttribute('aria-current', 'true');
          else dot.removeAttribute('aria-current');
        });
        count.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(heroSlides.length).padStart(2, '0');
        current = index;
      }

      function start() {
        stop();
        timer = window.setInterval(next, 5200);
      }

      dotButtons.forEach(function (dot) {
        dot.addEventListener('click', function () {
          activate(Number(dot.dataset.slide));
          start();
        });
      });

      root.addEventListener('mouseenter', stop);
      root.addEventListener('mouseleave', start);
      root.addEventListener('focusin', stop);
      root.addEventListener('focusout', function (event) {
        if (!root.contains(event.relatedTarget)) start();
      });
      root.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
          next();
          start();
        }
        if (event.key === 'ArrowLeft') {
          previous();
          start();
        }
      });

      let touchStartX = null;
      root.addEventListener('touchstart', function (event) {
        touchStartX = event.changedTouches[0].screenX;
      }, { passive: true });
      root.addEventListener('touchend', function (event) {
        if (touchStartX === null) return;
        const distance = event.changedTouches[0].screenX - touchStartX;
        if (Math.abs(distance) > 50) {
          if (distance < 0) next();
          else previous();
          start();
        }
        touchStartX = null;
      }, { passive: true });

      start();
    }
  }

  customElements.define('site-topbar', SiteTopbar);
  customElements.define('site-nav', SiteNav);
  customElements.define('site-hero', SiteHero);

  const oldTopbar = document.querySelector('.top-bar');
  if (oldTopbar) oldTopbar.replaceWith(document.createElement('site-topbar'));

  const oldNav = document.querySelector('.navbar');
  if (oldNav) oldNav.replaceWith(document.createElement('site-nav'));

  const oldHero = document.querySelector('.hero-aus');
  if (oldHero) {
    const home = currentPage() === 'index.html';
    const heading = oldHero.querySelector('h1');
    const hero = document.createElement('site-hero');
    hero.setAttribute('headline', home ? "READY FOR|WHAT'S NEXT" : (heading ? heading.textContent.replace(/\s+/g, ' ').trim() : "READY FOR|WHAT'S NEXT"));
    hero.setAttribute('statement', 'Your trusted partner in creating value');
    hero.setAttribute('slides', home ? 'true' : 'false');
    oldHero.replaceWith(hero);
  }
})();
