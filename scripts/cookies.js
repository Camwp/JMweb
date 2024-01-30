// Check if the user has previously accepted or denied cookies
const cookieConsent = localStorage.getItem('cookieConsent');

if (cookieConsent === 'accepted') {
    // User has already accepted cookies
    //hideCookieBanner();
} else if (cookieConsent === 'denied') {
    // User has already denied cookies
    // Handle as needed, e.g., show a message or adjust functionality
}

// Function to show the cookie consent banner
function showCookieBanner() {
    const cookieBanner = document.getElementById('cookieConsent');
    cookieBanner.style.display = 'block';
}

// Function to hide the cookie consent banner
function hideCookieBanner() {
    const cookieBanner = document.getElementById('cookieConsent');
    cookieBanner.style.display = 'none';
}

// Function to handle user's acceptance of cookies
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieBanner();
}

// Function to handle user's denial of cookies
function denyCookies() {
    localStorage.setItem('cookieConsent', 'denied');
    // Handle denial, e.g., by adjusting functionality or showing a message
    hideCookieBanner();
}
