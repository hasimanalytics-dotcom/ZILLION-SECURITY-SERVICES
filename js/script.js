document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle')
  const mobileNav = document.getElementById('mobileNav')

  const setMenu = (open) => {
    if (!menuToggle || !mobileNav) return
    mobileNav.classList.toggle('is-open', open)
    menuToggle.classList.toggle('is-open', open)
    menuToggle.setAttribute('aria-expanded', String(open))
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => setMenu(!mobileNav.classList.contains('is-open')))
    mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)))
    const groups = mobileNav.querySelectorAll('.mobile-group')
    groups.forEach((group) => {
      group.addEventListener('toggle', () => {
        if (group.open) groups.forEach((other) => { if (other !== group) other.open = false })
      })
    })
  }

  const closeDropdowns = () => {
    document.querySelectorAll('.nav-item.is-open').forEach((item) => {
      item.classList.remove('is-open')
      const toggle = item.querySelector('[data-dropdown-toggle]')
      if (toggle) toggle.setAttribute('aria-expanded', 'false')
    })
  }

  document.querySelectorAll('[data-dropdown-toggle]').forEach((toggle) => {
    const item = toggle.closest('.nav-item')
    if (!item) return
    toggle.addEventListener('click', (event) => {
      event.stopPropagation()
      const willOpen = !item.classList.contains('is-open')
      closeDropdowns()
      if (willOpen) {
        item.classList.add('is-open')
        toggle.setAttribute('aria-expanded', 'true')
      }
    })
    if (window.matchMedia('(hover: hover)').matches) {
      item.addEventListener('mouseenter', () => {
        closeDropdowns()
        item.classList.add('is-open')
        toggle.setAttribute('aria-expanded', 'true')
      })
      item.addEventListener('mouseleave', () => {
        item.classList.remove('is-open')
        toggle.setAttribute('aria-expanded', 'false')
      })
    }
  })

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-item.has-dropdown')) closeDropdowns()
  })

  const counters = document.querySelectorAll('.counter')
  if (counters.length) {
    const runCounter = (element) => {
      if (element.dataset.done === 'true') return
      element.dataset.done = 'true'
      const target = Number(element.dataset.count || 0)
      const duration = 1500
      const startTime = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        element.textContent = Math.floor(target * eased).toLocaleString('en-US')
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
    if ('IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCounter(entry.target)
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.4 })
      counters.forEach((counter) => counterObserver.observe(counter))
    } else {
      counters.forEach(runCounter)
    }
  }

  document.querySelectorAll('[data-slider]').forEach((track) => {
    const shell = track.closest('.slider-shell') || document
    const prev = shell.querySelector('[data-slider-prev]')
    const next = shell.querySelector('[data-slider-next]')
    const progress = shell.querySelector('.slider-progress-bar')
    const stepSize = () => {
      const slide = track.querySelector('.service-slide')
      return slide ? slide.getBoundingClientRect().width + 20 : 300
    }
    const updateProgress = () => {
      if (!progress) return
      const max = track.scrollWidth - track.clientWidth
      const ratio = max > 0 ? track.scrollLeft / max : 0
      progress.style.width = `${Math.max(18, Math.min(100, ratio * 100))}%`
    }
    if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -stepSize(), behavior: 'smooth' }))
    if (next) next.addEventListener('click', () => track.scrollBy({ left: stepSize(), behavior: 'smooth' }))
    track.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    updateProgress()

    let dragging = false
    let startX = 0
    let startScroll = 0
    track.addEventListener('dragstart', (event) => event.preventDefault())
    track.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return
      dragging = true
      startX = event.clientX
      startScroll = track.scrollLeft
      track.classList.add('is-dragging')
    })
    window.addEventListener('pointermove', (event) => {
      if (!dragging) return
      track.scrollLeft = startScroll - (event.clientX - startX)
    })
    window.addEventListener('pointerup', () => {
      dragging = false
      track.classList.remove('is-dragging')
    })
    window.addEventListener('pointercancel', () => {
      dragging = false
      track.classList.remove('is-dragging')
    })
  })

  const modal = document.getElementById('enquiryModal')
  let lastFocused = null
  const openModal = (trigger) => {
    if (!modal) return
    lastFocused = trigger || document.activeElement
    modal.hidden = false
    document.body.classList.add('modal-open')
    const firstField = modal.querySelector('input')
    if (firstField) window.setTimeout(() => firstField.focus(), 40)
  }
  const closeModal = () => {
    if (!modal || modal.hidden) return
    modal.hidden = true
    document.body.classList.remove('modal-open')
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus()
  }
  document.querySelectorAll('[data-modal-open]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault()
      openModal(button)
    })
  })
  if (modal) {
    modal.querySelectorAll('[data-modal-close]').forEach((element) => element.addEventListener('click', closeModal))
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal()
    })
  }

  document.querySelectorAll('form[data-enquiry-form], #enquiryForm').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const success = form.querySelector('.form-success')
      if (success) success.hidden = false
      form.reset()
    })
  })

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear())
  })

  const reveals = document.querySelectorAll('.reveal')
  if (reveals.length) {
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
      reveals.forEach((element) => revealObserver.observe(element))
    } else {
      reveals.forEach((element) => element.classList.add('is-visible'))
    }
  }

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return
    closeModal()
    closeDropdowns()
    setMenu(false)
  })
})
