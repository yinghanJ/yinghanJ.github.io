const items = [...document.querySelectorAll('.school-item')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setItem(item, open) {
  const button = item.querySelector('.school-toggle');
  item.classList.toggle('is-open', open);
  button.setAttribute('aria-expanded', String(open));
  button.querySelector('span').textContent = open ? '收起详情' : '查看详情';
  button.querySelector('b').textContent = open ? '↑' : '→';
}

function toggleItem(item) {
  const willOpen = !item.classList.contains('is-open');
  const current = items.find(other => other !== item && other.classList.contains('is-open'));
  const openAtRow = () => {
    setItem(item, true);
    requestAnimationFrame(() => {
      const headerHeight = document.querySelector('.detail-site-header')?.offsetHeight || 0;
      const top = item.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  };
  if (current) {
    setItem(current, false);
    if (willOpen) window.setTimeout(openAtRow, reduceMotion ? 0 : 520);
  } else if (willOpen) openAtRow();
  else setItem(item, false);
}

items.forEach(item => {
  const summary = item.querySelector('.school-summary');
  const button = item.querySelector('.school-toggle');
  button.addEventListener('click', event => {
    event.stopPropagation();
    toggleItem(item);
  });
  summary.addEventListener('click', () => toggleItem(item));
  summary.addEventListener('keydown', event => {
    if (event.target === summary && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      toggleItem(item);
    }
  });
});
