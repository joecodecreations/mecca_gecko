(() => {
  const links = document.querySelectorAll('a.screenshot, a[data-view]');
  if (!links.length || typeof HTMLDialogElement === 'undefined') return;
  const dialog = document.createElement('dialog');
  dialog.className = 'image-viewer';
  dialog.setAttribute('aria-label', 'Game screenshot');
  dialog.innerHTML = '<div class="viewer-toolbar"><p id="viewer-caption"></p><button type="button" class="viewer-close" autofocus aria-label="Close screenshot">Close <span aria-hidden="true">×</span></button></div><img class="viewer-image" alt="">';
  document.body.append(dialog);
  const photo = dialog.querySelector('img');
  const caption = dialog.querySelector('p');
  let opener;
  let oldOverflow;
  links.forEach(link => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      photo.src = link.href;
      photo.alt = link.dataset.caption || link.querySelector('img').alt;
      caption.textContent = photo.alt;
      oldOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
    });
  });
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = oldOverflow;
    opener?.focus({ preventScroll: true });
    photo.removeAttribute('src');
  });
})();

(() => {
  const tabs = document.querySelectorAll('.roster-tabs [role="tab"]');
  if (!tabs.length) return;
  document.documentElement.classList.add('js');
  document.querySelector('.roster-tabs').hidden = false;
  const select = tab => {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      const next = tabs[(i + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      select(next);
      next.focus();
    });
  });
  select(tabs[0]);
})();
