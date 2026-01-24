// Dynamically load Hotjar script
function loadHotjar() {
    if (window.hjLoaded) return; // prevent multiple loads
    window.hjLoaded = true;

    // Hotjar Tracking Code from Chat and Stack Overflow
    // stack website: https://stackoverflow.com/questions/77881531/how-to-disable-hotjar-recording-when-consent-changes
    (function (h, o, t, j, a, r) {
        h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
        h._hjSettings = { hjid: 1234567, hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script'); r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');


    // Hotjar Tracking Code for Contentsquare from their official setup instructions

    // Create a comment node
    const comment = document.createComment('For tracking user behavior on website with Hotjar - from Contentsquare official setup instuctions');
    document.head.appendChild(comment);

    // Create the script element
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://t.contentsquare.net/uxa/3c2c1e53ed01f.js';

    // Append to the end of <head>
    document.head.appendChild(script);
}

// Called when the user accepts cookies
function acceptCookies() {
    setConsent(true);
    hideBanner();
}

// Called when the user declines cookies
function declineCookies() {
    setConsent(false);
    hideBanner();
}

// Hide the cookie banner
function hideBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.hidden = true;
}

// Set consent state and apply Hotjar
function setConsent(value) {
    window.hjConsent = value;
    localStorage.setItem('hjConsent', value ? 'true' : 'false');

    if (value) {
        loadHotjar(); // Only load Hotjar after consent is given
    } else {
        // Reload the page to fully remove Hotjar
        if (!window.hjInitial) window.location.reload();
        window.hjInitial = false;
    }

    updateToggleUI();
}

// Update the toggle UI based on consent
function updateToggleUI() {
    const consentDiv = document.getElementById('toggle-consent');
    const noConsentDiv = document.getElementById('toggle-no-consent');

    if (!consentDiv || !noConsentDiv) return;

    consentDiv.classList.toggle('active', !!window.hjConsent);
    consentDiv.classList.toggle('inactive', !window.hjConsent);
    noConsentDiv.classList.toggle('active', !window.hjConsent);
    noConsentDiv.classList.toggle('inactive', !!window.hjConsent);
}

// On page load, check localStorage for consent
document.addEventListener('DOMContentLoaded', () => {
    const consent = localStorage.getItem('hjConsent');

    if (consent === 'true') {
        window.hjConsent = true;
        loadHotjar(); // Load Hotjar if consent was previously given
    } else if (consent === 'false') {
        window.hjConsent = false;
    } else {
        // No decision yet, show banner
        window.hjInitial = true;
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.hidden = false;
    }

    updateToggleUI();
});
