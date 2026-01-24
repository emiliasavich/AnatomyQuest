function acceptCookies() {
    localStorage.setItem('hjConsent', 'true');
    window.hjConsent = true;
    hj('consent', true);
    hideBanner();

    updateToggleUI();
    applyHotjarConsent();
}

function declineCookies() {
    localStorage.setItem('hjConsent', 'false');
    window.hjConsent = false;
    hj('consent', false);
    hideBanner();

    updateToggleUI();
    applyHotjarConsent();
}

function hideBanner() {
    document.getElementById('cookie-banner').hidden = true;
}

function setConsent(value) {
    window.hjConsent = value;
    localStorage.setItem('hjConsent', value ? 'true' : 'false');
    applyHotjarConsent();
    updateToggleUI();
  }

  function updateToggleUI() {
    const consentDiv = document.getElementById('toggle-consent');
    const noConsentDiv = document.getElementById('toggle-no-consent');

    if (window.hjConsent) {
      consentDiv.classList.add('active');
      consentDiv.classList.remove('inactive');
      noConsentDiv.classList.add('inactive');
      noConsentDiv.classList.remove('active');
    } else {
      consentDiv.classList.add('inactive');
      consentDiv.classList.remove('active');
      noConsentDiv.classList.add('active');
      noConsentDiv.classList.remove('inactive');
    }
  }

  function applyHotjarConsent() {
    if (typeof hj === 'function') {
      hj('consent', window.hjConsent);
    }
  }

document.addEventListener('DOMContentLoaded', () => {
    const consent = localStorage.getItem('hjConsent');

    if (consent === 'true') {
      window.hjConsent = true;
    } else if (consent === 'false') {
      window.hjConsent = false;
    } else {
      // No decision yet
      document.getElementById('cookie-banner').hidden = false;
    }

    updateToggleUI();
    applyHotjarConsent();
});
