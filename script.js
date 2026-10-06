const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle) toggle.addEventListener('click', () => { nav.classList.toggle('open'); toggle.classList.toggle('active'); });
window.addEventListener('scroll', () => { document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`); }, { passive: true });
