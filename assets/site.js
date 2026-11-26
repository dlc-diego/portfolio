const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
const links = [...nav.querySelectorAll('a')];

document.documentElement.classList.add('enhanced');

function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
}

menu.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', String(menu.getAttribute('aria-expanded') === 'false'));
});

nav.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || menu.getAttribute('aria-expanded') === 'false') return;

  closeMenu();
  const destination = document.querySelector(link.hash);
  destination.tabIndex = -1;
  destination.focus({ preventScroll: true });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});

function updateLocation() {
  const atBottom = scrollY > 0 && scrollY + innerHeight >= document.documentElement.scrollHeight - 2;
  const current = atBottom ? links.at(-1) : links.findLast((link) => {
    const section = document.querySelector(link.hash);
    return section.getBoundingClientRect().top <= 150;
  }) ?? links[0];

  for (const link of links) {
    if (link === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

let scheduled = false;
function scheduleLocationUpdate() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    updateLocation();
    scheduled = false;
  });
}

window.addEventListener('scroll', scheduleLocationUpdate, { passive: true });
window.addEventListener('resize', scheduleLocationUpdate);
updateLocation();
