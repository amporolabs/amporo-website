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
    var isGerman = (document.documentElement.getAttribute('lang') || '').toLowerCase().indexOf('de') === 0;
    toggleBtn.setAttribute(
      'aria-label',
      isGerman
        ? (theme === 'dark' ? 'Zu hellem Design wechseln' : 'Zu dunklem Design wechseln')
        : (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme')
    );
    toggleBtn.removeAttribute('title');
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

  // Language switcher preference handling
  var langLinks = document.querySelectorAll('.lang-switcher a.lang-opt');
  langLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      var lang = link.getAttribute('data-lang');
      if (lang) {
        try {
          localStorage.setItem('amporo-lang', lang);
        } catch (e) {}
      }
    });
  });

  // German locale suggestion toast on English homepage
  var langToast = document.getElementById('lang-toast');
  if (langToast) {
    try {
      var savedLang = localStorage.getItem('amporo-lang');
      var dismissed = sessionStorage.getItem('amporo-lang-dismissed');
      var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      var isGermanBrowser = browserLang.indexOf('de') === 0;

      // Show toast if visitor hasn't chosen English, hasn't dismissed toast, and has German browser
      if (!savedLang && !dismissed && isGermanBrowser) {
        setTimeout(function () {
          langToast.classList.add('is-visible');
        }, 600);
      }

      var toastClose = document.getElementById('lang-toast-close');
      if (toastClose) {
        toastClose.addEventListener('click', function () {
          langToast.classList.remove('is-visible');
          try {
            sessionStorage.setItem('amporo-lang-dismissed', 'true');
          } catch (e) {}
        });
      }

      var toastLink = langToast.querySelector('.lang-toast-link');
      if (toastLink) {
        toastLink.addEventListener('click', function () {
          try {
            localStorage.setItem('amporo-lang', 'de');
          } catch (e) {}
        });
      }
    } catch (e) {}
  }
})();
