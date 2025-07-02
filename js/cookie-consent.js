/**
 * GDPR Cookie Consent Manager
 * Manages cookie consent and preferences for the website
 */

class CookieConsentManager {
    constructor() {
        this.cookieName = 'azs-cookie-consent';
        this.cookieExpiry = 365; // days
        this.consentTypes = {
            essential: { name: 'Essential', required: true, enabled: true },
            analytics: { name: 'Analytics', required: false, enabled: false }
            // preferences: { name: 'Preferences', required: false, enabled: false }
        };

        this.init();

    } init() {
        // Check if consent has already been given
        const consent = this.getConsentCookie();

        if (!consent) {
            // No consent given - apply default (deny analytics)
            // this.applyConsent({
            //     essential: true,
            //     analytics: false,
            //     // preferences: false,
            //     timestamp: Date.now()
            // });
            this.showConsentBanner();
        } else {
            this.applyConsent(consent);
        }

        this.bindEvents();
        this.addSettingsLinkToFooter();
    }

    getConsentCookie() {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${this.cookieName}=`);
        if (parts.length === 2) {
            try {
                return JSON.parse(decodeURIComponent(parts.pop().split(';').shift()));
            } catch (e) {
                return null;
            }
        }
        return null;
    }

    setConsentCookie(consent) {
        const date = new Date();
        date.setTime(date.getTime() + (this.cookieExpiry * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        const consentString = encodeURIComponent(JSON.stringify(consent));
        document.cookie = `${this.cookieName}=${consentString};${expires};path=/;SameSite=Lax`;
    }

    showConsentBanner() {
        // Remove existing banner if present
        const existingBanner = document.getElementById('cookie-consent-banner');
        if (existingBanner) {
            existingBanner.remove();
        }

        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.className = 'cookie-consent-banner'; banner.innerHTML = `
            <div class="cookie-consent-container">
                <div class="cookie-consent-content">
                    <div class="cookie-consent-title">We use cookies</div>
                    <div class="cookie-consent-message">
                        We use cookies to enhance your browsing experience and analyze website traffic. 
                        Learn more in our <a href="https://www.dell.com/en-us/lp/legal/policies-cookies-ads-emails" target="_blank">Cookie Policy</a>.
                    </div>
                </div>
                <div class="cookie-consent-buttons">
                    <button id="cookie-accept-all" class="cookie-consent-btn cookie-consent-btn-accept">Accept</button>
                    <button id="cookie-decline" class="cookie-consent-btn cookie-consent-btn-decline">Decline</button>
                    <button id="cookie-customize" class="cookie-consent-btn cookie-consent-btn-customize">Customize</button>
                </div>
            </div>
        `; document.body.appendChild(banner);

        // Show banner with animation
        setTimeout(() => {
            banner.classList.add('show');
        }, 100);

        // Bind events
        document.getElementById('cookie-accept-all').addEventListener('click', () => this.acceptAll());
        document.getElementById('cookie-decline').addEventListener('click', () => this.declineAll());
        document.getElementById('cookie-customize').addEventListener('click', () => this.showSettingsModal());
    }

    hideConsentBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => {
                banner.remove();
            }, 300);
        }
    }

    acceptAll() {
        const consent = {
            timestamp: Date.now(),
            essential: true,
            analytics: true
            // preferences: true
        };

        this.setConsentCookie(consent);
        this.applyConsent(consent);
        this.hideConsentBanner();
    }

    declineAll() {
        const consent = {
            timestamp: Date.now(),
            essential: true,
            analytics: false
            // preferences: false
        };

        this.setConsentCookie(consent);
        this.applyConsent(consent);
        this.hideConsentBanner();
    }

    showSettingsModal() {
        // Remove existing modal if present
        const existingModal = document.getElementById('cookie-settings-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const currentConsent = this.getConsentCookie() || {
            essential: true,
            analytics: true
            // preferences: false
        };

        const modal = document.createElement('div');
        modal.id = 'cookie-settings-modal';
        modal.className = 'cookie-settings-modal';
        modal.innerHTML = `
            <div class="cookie-settings-content">
                <button class="cookie-settings-close" aria-label="Close">&times;</button>
                <div class="cookie-settings-header">
                    <h2 class="cookie-settings-title">Cookie Settings</h2>
                    <p class="cookie-settings-description">
                        Choose which cookies you want to accept. You can change these settings at any time.
                    </p>
                </div>
                <div class="cookie-settings-body">
                    ${this.generateCookieCategories(currentConsent)}
                </div>
                <div class="cookie-settings-footer">
                    <button id="cookie-settings-save" class="cookie-consent-btn cookie-consent-btn-accept">Save Preferences</button>
                    <button id="cookie-settings-cancel" class="cookie-consent-btn cookie-consent-btn-cancel">Cancel</button>
                </div>
            </div>
        `; document.body.appendChild(modal); modal.classList.add('show');

        // Bind events
        modal.querySelector('.cookie-settings-close').addEventListener('click', () => this.hideSettingsModal());
        document.getElementById('cookie-settings-cancel').addEventListener('click', () => this.hideSettingsModal());
        document.getElementById('cookie-settings-save').addEventListener('click', () => this.saveCustomSettings());

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.hideSettingsModal();
            }
        });
    }

    generateCookieCategories(currentConsent) {
        const categories = [
            {
                id: 'essential',
                title: 'Essential Cookies',
                description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
                required: true,
                enabled: true
            },
            {
                id: 'analytics',
                title: 'Analytics Cookies',
                description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
                required: false,
                enabled: currentConsent.analytics || false
            }
            // {
            //     id: 'preferences',
            //     title: 'Preference Cookies',
            //     description: 'These cookies allow the website to remember choices you make and provide enhanced, more personal features.',
            //     required: false,
            //     enabled: currentConsent.preferences || false
            // }
        ];

        return categories.map(category => `
            <div class="cookie-category">
                <div class="cookie-category-header">
                    <h3 class="cookie-category-title">${category.title}</h3>
                    <label class="cookie-category-toggle">
                        <input type="checkbox" 
                               id="cookie-${category.id}" 
                               ${category.enabled ? 'checked' : ''} 
                               ${category.required ? 'disabled' : ''}>
                        <span class="cookie-toggle-slider"></span>
                    </label>
                </div>
                <p class="cookie-category-description">${category.description}</p>
            </div>
        `).join('');
    }

    hideSettingsModal() {
        const modal = document.getElementById('cookie-settings-modal');
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    }

    saveCustomSettings() {
        const consent = {
            timestamp: Date.now(),
            essential: true,
            analytics: document.getElementById('cookie-analytics').checked
            // preferences: document.getElementById('cookie-preferences').checked
        };

        this.setConsentCookie(consent);
        this.applyConsent(consent);
        this.hideSettingsModal();
        this.hideConsentBanner();
    }

    applyConsent(consent) {
        // Handle Google Analytics
        if (consent.analytics) {
            // We will not force load Google Analytics here it will be loaded by default
            // this.enableGoogleAnalytics();
        } else {
            this.removeGoogleAnalyticsCookies();
        }
    }

    removeGoogleAnalyticsCookies() {
        const hostname = window.location.hostname;
        const domain = hostname.startsWith('www.') ? hostname.substring(4) : hostname;

        // Get all current cookies
        const allCookies = document.cookie.split(';');

        // Debug: Log all cookies for troubleshooting
        // console.log('All cookies found:', allCookies.map(c => c.split('=')[0].trim()));

        allCookies.forEach(cookie => {
            const cookieName = cookie.split('=')[0].trim();

            // Check if this cookie starts with any GA-related prefix
            const isGACookie = cookieName.startsWith('_ga') ||
                cookieName.startsWith('_gid') ||
                cookieName.startsWith('_gat') ||
                cookieName.startsWith('_gtag') ||
                cookieName.startsWith('_gcl') ||
                cookieName.startsWith('_gac') ||
                cookieName.startsWith('_dc_gtm') ||
                cookieName === 'AMP_TOKEN';

            if (isGACookie) {
                // console.log(`Removing GA cookie: ${cookieName}`);

                // Remove cookie with multiple domain variations to ensure complete removal
                const expireDate = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';

                // Try different path and domain combinations
                document.cookie = `${cookieName}=; ${expireDate}; path=/;`;
                document.cookie = `${cookieName}=; ${expireDate}; path=/; domain=${hostname};`;
                document.cookie = `${cookieName}=; ${expireDate}; path=/; domain=.${hostname};`;
                document.cookie = `${cookieName}=; ${expireDate}; path=/; domain=${domain};`;
                document.cookie = `${cookieName}=; ${expireDate}; path=/; domain=.${domain};`;

                // Also try removing from root domain (for multi-subdomain setups)
                const rootDomain = domain.split('.').slice(-2).join('.');
                if (rootDomain !== domain) {
                    document.cookie = `${cookieName}=; ${expireDate}; path=/; domain=.${rootDomain};`;
                }

                // Try with SameSite attributes as well
                // document.cookie = `${cookieName}=; ${expireDate}; path=/; SameSite=Lax;`;
                // document.cookie = `${cookieName}=; ${expireDate}; path=/; SameSite=Strict;`;
                // document.cookie = `${cookieName}=; ${expireDate}; path=/; SameSite=None; Secure;`;
            }
        });

        // Also clear any gtag data layer entries
        if (window.dataLayer) {
            window.dataLayer.push({
                event: 'gtm.clear_user_data'
            });
        }

        // Log remaining cookies after cleanup
        // setTimeout(() => {
        //     const remainingCookies = document.cookie.split(';').map(c => c.split('=')[0].trim());
        //     const remainingGACookies = remainingCookies.filter(name =>
        //         name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat') || name.startsWith('_gtag')
        //     );
        //     if (remainingGACookies.length > 0) {
        //         console.warn('GA cookies still present after cleanup:', remainingGACookies);
        //     }
        // }, 100);
    }

    // handleThirdPartyScripts(consent) {
    //     // Handle other third-party scripts based on consent
    //     // Add your specific implementations here

    //     // Example: YouTube embeds
    //     if (consent.preferences) {
    //         // Enable YouTube embeds
    //         this.enableYouTubeEmbeds();
    //     } else {
    //         // Replace YouTube embeds with placeholders
    //         this.disableYouTubeEmbeds();
    //     }
    // }

    // enableYouTubeEmbeds() {
    //     // Implementation for enabling YouTube embeds
    //     const placeholders = document.querySelectorAll('.youtube-placeholder');
    //     placeholders.forEach(placeholder => {
    //         const videoId = placeholder.dataset.videoId;
    //         if (videoId) {
    //             const iframe = document.createElement('iframe');
    //             iframe.src = `https://www.youtube.com/embed/${videoId}`;
    //             iframe.width = placeholder.dataset.width || '560';
    //             iframe.height = placeholder.dataset.height || '315';
    //             iframe.frameBorder = '0';
    //             iframe.allowFullscreen = true;
    //             placeholder.parentNode.replaceChild(iframe, placeholder);
    //         }
    //     });
    // }

    // disableYouTubeEmbeds() {
    //     // Implementation for disabling YouTube embeds
    //     const iframes = document.querySelectorAll('iframe[src*="youtube.com"]');
    //     iframes.forEach(iframe => {
    //         const placeholder = document.createElement('div');
    //         placeholder.className = 'youtube-placeholder';
    //         placeholder.dataset.videoId = this.extractYouTubeId(iframe.src);
    //         placeholder.dataset.width = iframe.width;
    //         placeholder.dataset.height = iframe.height;
    //         placeholder.innerHTML = `
    //             <div style="background: #f0f0f0; padding: 40px; text-align: center; border: 1px solid #ddd;">
    //                 <p>YouTube video blocked. Enable preference cookies to view.</p>
    //                 <button onclick="window.cookieConsentManager.showSettingsModal()">Cookie Settings</button>
    //             </div>
    //         `;
    //         iframe.parentNode.replaceChild(placeholder, iframe);
    //     });
    // }

    // extractYouTubeId(url) {
    //     const match = url.match(/(?:youtube\.com\/embed\/|youtu\.be\/)([^?&]+)/);
    //     return match ? match[1] : '';
    // }

    addSettingsLinkToFooter() {
        // Add cookie settings link to footer
        const footer = document.querySelector('footer');
        if (footer) {
            const settingsLink = document.createElement('a');
            settingsLink.href = '#';
            settingsLink.className = 'cookie-settings-link';
            settingsLink.textContent = 'Cookie Settings';
            settingsLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSettingsModal();
            });

            // Try to find an appropriate place in the footer
            const footerLinks = footer.querySelector('.footer-links, .footer-nav, ul');
            if (footerLinks) {
                const listItem = document.createElement('li');
                listItem.appendChild(settingsLink);
                footerLinks.appendChild(listItem);
            } else {
                footer.appendChild(settingsLink);
            }
        }
    }

    bindEvents() {
        // Listen for page navigation to recheck consent
        window.addEventListener('popstate', () => {
            const consent = this.getConsentCookie();
            if (consent) {
                this.applyConsent(consent);
            }
        });
    }

    // Public methods for external use
    static getInstance() {
        if (!window.cookieConsentManager) {
            window.cookieConsentManager = new CookieConsentManager();
        }
        return window.cookieConsentManager;
    }

}

// Initialize when DOM is ready
// Initialize the cookie consent manager
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            CookieConsentManager.getInstance();
        }, 100); // Small delay to ensure other scripts have loaded
    });
} else {
    // DOM already loaded
    setTimeout(() => {
        CookieConsentManager.getInstance();
    }, 100);
}

// Make it globally available
window.CookieConsentManager = CookieConsentManager;
