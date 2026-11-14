// Mobile Menu Toggle
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
  }
}

// Academy Brand Mode Toggle (Kids / Pro)
function setAcademyMode(mode) {
  const logo = document.getElementById('main-logo-img');
  const kidsBtn = document.getElementById('toggle-kids-btn');
  const proBtn = document.getElementById('toggle-pro-btn');
  
  if (mode === 'pro') {
    if (logo) logo.src = 'assets/images/logo-pro.png';
    if (kidsBtn) kidsBtn.className = 'px-2.5 sm:px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-all cursor-pointer';
    if (proBtn) proBtn.className = 'px-2.5 sm:px-3 py-1 rounded-full bg-primary text-white transition-all shadow-sm cursor-pointer';
    localStorage.setItem('w_academy_mode', 'pro');
  } else {
    if (logo) logo.src = 'assets/images/logo-kids.png';
    if (kidsBtn) kidsBtn.className = 'px-2.5 sm:px-3 py-1 rounded-full bg-primary text-white transition-all shadow-sm cursor-pointer';
    if (proBtn) proBtn.className = 'px-2.5 sm:px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-all cursor-pointer';
    localStorage.setItem('w_academy_mode', 'kids');
  }
}

// Intersection Observer for scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved mode
  const savedMode = localStorage.getItem('w_academy_mode');
  if (savedMode === 'pro') {
    setAcademyMode('pro');
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal-init');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('reveal-visible'));
  }
});
