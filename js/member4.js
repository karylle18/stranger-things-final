/* Member 4 page support. No changes to the group's js/main.js. */
(function () {
  'use strict';
  // Update this key after checking the group's theme setting in js/main.js.
  const THEME_KEY = 'stranger-things-upside-down';
  const body = document.body;
  const themeButton = document.getElementById('m4-theme-toggle');
  let saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (_) { /* private browsing */ }
  const setTheme = (isUpsideDown) => {
    body.classList.toggle('m4-upside-down', isUpsideDown);
    if (themeButton) {
      themeButton.setAttribute('aria-pressed', String(isUpsideDown));
      themeButton.textContent = isUpsideDown ? 'Return to Hawkins' : 'Enter Upside Down';
    }
  };
  setTheme(saved === 'true');
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const next = !body.classList.contains('m4-upside-down');
      setTheme(next);
      try { localStorage.setItem(THEME_KEY, String(next)); } catch (_) { /* ignore */ }
    });
  }
  const search = document.getElementById('m4-glossary-search');
  if (search) {
    const cards = Array.from(document.querySelectorAll('[data-glossary-term]'));
    const count = document.getElementById('m4-count');
    const empty = document.getElementById('m4-empty');
    const filter = () => {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const match = card.textContent.toLowerCase().includes(query);
        card.hidden = !match;
        if (match) visible++;
      });
      count.textContent = visible + ' of ' + cards.length + ' terms shown';
      empty.hidden = visible !== 0;
    };
    search.addEventListener('input', filter);
    filter();
  }
})();
