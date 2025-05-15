// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && navLinks && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = isOpen ? 'none' : 'flex';
    hamburger.setAttribute('aria-expanded', !isOpen);
    // Copy nav links to mobile menu if not already
    if (!mobileMenu.innerHTML.trim()) {
      mobileMenu.innerHTML = navLinks.innerHTML;
    }
  });
}

// Back to Top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
function setDarkMode(on) {
  document.body.classList.toggle('dark-mode', on);
  localStorage.setItem('darkMode', on ? '1' : '0');
  darkModeToggle.textContent = on ? '☀️' : '🌙';
}
darkModeToggle && darkModeToggle.addEventListener('click', () => {
  setDarkMode(!document.body.classList.contains('dark-mode'));
});
// On load
if (localStorage.getItem('darkMode') === '1') setDarkMode(true);

// Fade-in animation on scroll
function fadeInOnScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', fadeInOnScroll);

// Add fade-in class to main sections
['.hero', '.why-choose', '.testimonials', '.latest-articles', 'footer'].forEach(sel => {
  const el = document.querySelector(sel);
  if (el) el.classList.add('fade-in');
});

// Keyboard navigation for carousel
const carousel = document.querySelector('.carousel');
if (carousel) {
  carousel.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') {
      const left = carousel.querySelector('.carousel-arrow.left');
      left && left.click();
    } else if (e.key === 'ArrowRight') {
      const right = carousel.querySelector('.carousel-arrow.right');
      right && right.click();
    } else if (e.key === 'Tab') {
      // Allow tab navigation
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (document.activeElement.classList.contains('indicator')) {
        document.activeElement.click();
      }
    }
  });
}

// Inject SVG icons for features
const featureIcons = [
  `<svg viewBox="0 0 48 48" fill="none"><rect x="8" y="16" width="32" height="24" rx="4" fill="#31d35c"/><rect x="16" y="8" width="16" height="8" rx="2" fill="#2d314d"/></svg>`,
  `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" fill="#31d35c"/><rect x="20" y="14" width="8" height="20" rx="2" fill="#2d314d"/></svg>`,
  `<svg viewBox="0 0 48 48" fill="none"><rect x="8" y="24" width="32" height="12" rx="4" fill="#31d35c"/><rect x="20" y="12" width="8" height="12" rx="2" fill="#2d314d"/></svg>`,
  `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" fill="#31d35c"/><path d="M24 14v20M14 24h20" stroke="#2d314d" stroke-width="3" stroke-linecap="round"/></svg>`
];
document.querySelectorAll('.feature .icon').forEach((el, i) => {
  el.innerHTML = featureIcons[i] || '';
});

// Newsletter form basic validation
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    if (email && email.includes('@')) {
      alert('Thank you for subscribing!');
      newsletterForm.reset();
    } else {
      alert('Please enter a valid email address.');
    }
  });
} 