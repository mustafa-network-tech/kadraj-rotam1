// Layout loader for header and footer
(function() {
  'use strict';

  function loadHeader() {
    const headerEl = document.getElementById('site-header');
    if (!headerEl) return;

    fetch('header.html')
      .then(response => {
        if (!response.ok) {
          return fetch('/header.html');
        }
        return response;
      })
      .then(response => response.text())
      .then(html => {
        headerEl.innerHTML = html.trim();
      })
      .catch(err => {
        console.error('Error loading header:', err);
        fetch('/header.html')
          .then(response => response.text())
          .then(html => {
            headerEl.innerHTML = html.trim();
          })
          .catch(() => {});
      });
  }

  function loadFooter() {
    const footerEl = document.getElementById('site-footer');
    if (!footerEl) return;

    fetch('footer.html')
      .then(response => {
        if (!response.ok) {
          return fetch('/footer.html');
        }
        return response;
      })
      .then(response => response.text())
      .then(html => {
        footerEl.innerHTML = html.trim();
      })
      .catch(err => {
        console.error('Error loading footer:', err);
        fetch('/footer.html')
          .then(response => response.text())
          .then(html => {
            footerEl.innerHTML = html.trim();
          })
          .catch(() => {});
      });
  }

  // Load header and footer when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadHeader();
      loadFooter();
    });
  } else {
    loadHeader();
    loadFooter();
  }
})();
