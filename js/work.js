const workItems = [...document.querySelectorAll('.work-item')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setWorkOpen(item, open) {
  const button = item.querySelector('.work-toggle button');
  const isDigital = item.classList.contains('digital-item');
  item.classList.toggle('is-open', open);
  button.setAttribute('aria-expanded', String(open));
  button.querySelector('span').textContent = open ? '收起详情' : (isDigital ? '查看数金经历' : '查看浦分经历');
  button.querySelector('b').textContent = open ? '↑' : '→';
  if (open) requestAnimationFrame(() => item.querySelectorAll('.work-reveal').forEach((el, i) => window.setTimeout(() => el.classList.add('is-visible'), reduceMotion ? 0 : i * 90)));
}

function toggleWorkItem(item) {
  const willOpen = !item.classList.contains('is-open');
  const current = workItems.find(other => other !== item && other.classList.contains('is-open'));
  const openAtRow = () => {
    setWorkOpen(item, true);
    requestAnimationFrame(() => {
      const headerHeight = document.querySelector('.detail-site-header')?.offsetHeight || 0;
      const top = item.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  };
  if (current) {
    setWorkOpen(current, false);
    if (willOpen) window.setTimeout(openAtRow, reduceMotion ? 0 : 560);
  } else if (willOpen) openAtRow();
  else setWorkOpen(item, false);
}

workItems.forEach(item => {
  const summary = item.querySelector('.work-toggle');
  const button = summary.querySelector('button');
  let hoverTimer;

  summary.addEventListener('mouseenter', () => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || item.classList.contains('is-open')) return;
    window.clearTimeout(hoverTimer);
    hoverTimer = window.setTimeout(() => {
      workItems.forEach(other => {
        if (other !== item && other.classList.contains('is-open')) setWorkOpen(other, false);
      });
      setWorkOpen(item, true);
    }, reduceMotion ? 0 : 140);
  });

  summary.addEventListener('mouseleave', () => window.clearTimeout(hoverTimer));
  button.addEventListener('click', event => { event.stopPropagation(); toggleWorkItem(item); });
  summary.addEventListener('click', () => toggleWorkItem(item));
  summary.addEventListener('keydown', event => {
    if (event.target === summary && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      toggleWorkItem(item);
    }
  });
});

document.querySelectorAll('.case-toggle').forEach(button => button.addEventListener('click', () => {
  const article = button.closest('article');
  const open = !article.classList.contains('is-open');
  const otherOpen = [...document.querySelectorAll('.core-grid>article.is-open')].some(item => item !== article);
  document.querySelectorAll('.core-grid>article.is-open').forEach(item => { if (item !== article) { item.classList.remove('is-open'); const control = item.querySelector('.case-toggle'); control.setAttribute('aria-expanded', 'false'); control.firstChild.textContent = '查看详情 '; } });
  article.classList.toggle('is-open', open);
  button.setAttribute('aria-expanded', String(open));
  button.firstChild.textContent = open ? '收起详情 ' : '查看详情 ';
  if (open) {
    window.setTimeout(() => {
      const panel = article.querySelector('.case-panel');
      const headerHeight = document.querySelector('.detail-site-header')?.offsetHeight || 0;
      const top = panel.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    }, otherOpen && !reduceMotion ? 680 : 30);
  }
}));

document.querySelectorAll('.close-work-detail').forEach(button => button.addEventListener('click', () => {
  const item = button.closest('.work-item');
  if (!item) return;
  const headerHeight = document.querySelector('.detail-site-header')?.offsetHeight || 0;
  setWorkOpen(item, false);
  requestAnimationFrame(() => {
    const top = item.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
    window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
}));

const requestedWork = new URLSearchParams(window.location.search).get('open');
const requestedItem = requestedWork === 'digital'
  ? document.querySelector('.digital-item')
  : requestedWork === 'pudong'
    ? document.querySelector('.pudong-item')
    : null;

if (requestedItem) {
  setWorkOpen(requestedItem, true);
  window.setTimeout(() => {
    const detailStart = requestedItem.querySelector('.digital-intro, .pudong-intro');
    const headerHeight = document.querySelector('.detail-site-header')?.offsetHeight || 0;
    const top = detailStart.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
    window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, reduceMotion ? 0 : 120);
}
