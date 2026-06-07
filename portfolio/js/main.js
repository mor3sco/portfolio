/* ════════════════════════════════════════════════
   Evandro Moresco — Portfolio
   js/main.js
   ════════════════════════════════════════════════ */

/* ── CUSTOM CURSOR ── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});
function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

/* ── TYPED TEXT ── */
const rolesPT = ['React · Node.js · TypeScript', 'Python · REST APIs', 'Docker · Linux · DevSecOps', 'OWASP · Pentest · SOC'];
const rolesEN = ['React · Node.js · TypeScript', 'Python · REST APIs', 'Docker · Linux · DevSecOps', 'OWASP · Pentest · SOC'];
let currentRoles = rolesPT;
let ri = 0, ci = 0, del = false;
let typeTimer = null;
const typed = document.getElementById('typed-role');

function typeEffect() {
  if (!typed) return;
  const current = currentRoles[ri];
  if (!del) {
    typed.textContent = current.substring(0, ci + 1);
    ci++;
    if (ci === current.length) { del = true; typeTimer = setTimeout(typeEffect, 2000); return; }
  } else {
    typed.textContent = current.substring(0, ci - 1);
    ci--;
    if (ci === 0) { del = false; ri = (ri + 1) % currentRoles.length; }
  }
  typeTimer = setTimeout(typeEffect, del ? 55 : 90);
}
setTimeout(typeEffect, 1500);

/* Called by i18n when language switches */
window.updateTypedRoles = function(lang) {
  currentRoles = lang === 'en' ? rolesEN : rolesPT;
  clearTimeout(typeTimer);
  ci = 0; del = false;
  if (typed) typed.textContent = '';
  typeTimer = setTimeout(typeEffect, 300);
};

/* ── LANG BUTTON FLASH ── */
const origToggle = window.toggleLang;
window.toggleLang = function() {
  const btn = document.getElementById('lang-btn');
  if (btn) {
    btn.classList.add('switching');
    setTimeout(() => btn.classList.remove('switching'), 350);
  }
  if (origToggle) origToggle();
};

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => revealObs.observe(r));

/* ── EXPERIENCE TABS ── */
function showExp(idx, el) {
  document.querySelectorAll('.exp-nav-item').forEach(i => i.classList.remove('active'));
  document.querySelectorAll('.exp-entry').forEach(e => e.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.exp-entry')[idx].classList.add('active');
}
window.showExp = showExp;

/* ── PROJECT FILTER ── */
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
  });
}
window.filterProjects = filterProjects;

/* ── NAV SCROLL SHRINK ── */
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.padding =
    window.scrollY > 60 ? '0.8rem 3rem' : '1.25rem 3rem';
});

/* ── STAGGER SKILL TAGS ── */
document.querySelectorAll('.skill-tag').forEach((tag, i) => {
  tag.style.transitionDelay = (i * 30) + 'ms';
});
