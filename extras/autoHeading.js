
(function(){
  const sections = document.querySelectorAll('section[data-title]');
  sections.forEach(sec => {
    if (sec.closest('header, footer')) return;
    if (sec.querySelector('.ornament-title')) return;
    const title = sec.getAttribute('data-title') || '';
    if (!title) return;
    const h = document.createElement('h2');
    h.className = 'ornament-title';
    const span = document.createElement('span');
    span.textContent = title;
    h.appendChild(span);
    sec.insertAdjacentElement('afterbegin', h);
  });
})();
