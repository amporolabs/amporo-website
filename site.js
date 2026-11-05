(function () {
  'use strict';

  // Set current copyright year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Theme toggle handling
  var toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  function getEffectiveTheme() {
    var manual = document.documentElement.getAttribute('data-theme');
    if (manual) return manual;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function updateAria(theme) {
    toggleBtn.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
    );
    toggleBtn.setAttribute('title', theme === 'dark' ? 'Light mode' : 'Dark mode');
  }

  updateAria(getEffectiveTheme());

  toggleBtn.addEventListener('click', function () {
    var current = getEffectiveTheme();
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('amporo-theme', next);
    } catch (e) {}
    updateAria(next);
  });

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      try {
        if (!localStorage.getItem('amporo-theme')) {
          updateAria(e.matches ? 'dark' : 'light');
        }
      } catch (err) {}
    });
  }
})();
