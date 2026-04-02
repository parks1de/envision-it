/* ═══════════════════════════════════════════════════════════════
   ENVISION-IT — Global JavaScript
   ═══════════════════════════════════════════════════════════════ */

/* ── SCROLL REVEAL ─────────────────────────────────────────── */
(function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();

/* ── MODALS ─────────────────────────────────────────────────── */
let _activeModal = null;

function openModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  _activeModal = overlay;
  overlay.addEventListener('click', _overlayClick);
}

function closeModal() {
  if (!_activeModal) return;
  _activeModal.classList.remove('open');
  _activeModal.removeEventListener('click', _overlayClick);
  document.body.style.overflow = '';
  _activeModal = null;
}

function _overlayClick(e) {
  if (e.target === _activeModal) closeModal();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ── NAV ACTIVE LINK ────────────────────────────────────────── */
(function highlightNav() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('[data-nav-link]').forEach((link) => {
    const href = link.getAttribute('href')?.replace(/\/$/, '') || '';
    if (href === path || (href !== '/' && path.startsWith(href))) {
      link.classList.add('nav-active');
    }
  });
})();

/* ── SMOOTH SCROLL FOR ANCHORS ──────────────────────────────── */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (!target) return;
  e.preventDefault();
  const navH = document.querySelector('nav')?.offsetHeight || 0;
  const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
  window.scrollTo({ top, behavior: 'smooth' });
});

/* ── HAMBURGER NAV ──────────────────────────────────────────── */
(function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const drawer = document.getElementById('nav-drawer');
  const close  = document.getElementById('nav-drawer-close');

  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  const closeDrawer = () => {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (close) close.addEventListener('click', closeDrawer);

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });
})();

/* ── NAV SCROLL SHADOW ──────────────────────────────────────── */
(function initNavShadow() {
  const nav = document.querySelector('nav.site-nav');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ── YEAR IN FOOTER ─────────────────────────────────────────── */
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

/* ── SANITY CMS ─────────────────────────────────────────────── */
const SANITY_PROJECT = 'u535idy2';
const SANITY_DATASET = 'production';
const sanityFetch = (query) =>
  fetch(`https://${SANITY_PROJECT}.api.sanity.io/v2024-01-01/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`)
  .then(r => r.json()).then(r => r.result);

// Load testimonials into index.html .testimonials-grid
async function loadTestimonials(segment = null) {
  const filter = segment ? `&& segment == "${segment}"` : '';
  const data = await sanityFetch(`*[_type=="testimonial" && active==true ${filter}]{name,role,company,quote}`);
  const grid = document.querySelector('.testimonials-grid');
  if (!grid || !data?.length) return;
  grid.innerHTML = data.map(t => `
    <div class="testimonial-card reveal">
      <p class="t-quote">"${t.quote}"</p>
      <div class="t-name">${t.name}</div>
      <div class="t-role">${t.role}${t.company ? ', '+t.company : ''}</div>
    </div>`).join('');
}

// Load team into om-oss.html .team-grid
async function loadTeam() {
  const data = await sanityFetch(`*[_type=="teamMember"] | order(order asc) {name,title,"photo":photo.asset->url}`);
  const grid = document.querySelector('.team-grid');
  if (!grid || !data?.length) return;
  grid.innerHTML = data.map(m => `
    <div class="team-card">
      <img src="${m.photo}?w=400&h=400&fit=crop" alt="${m.name}" loading="lazy">
      <div class="team-name">${m.name}</div>
      <div class="team-role">${m.title}</div>
    </div>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.testimonials-grid')) loadTestimonials();
  if (document.querySelector('.team-grid')) loadTeam();
});
