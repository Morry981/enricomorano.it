let mp: typeof import('mixpanel-browser').default | null = null;
let loadPromise: Promise<void> | null = null;

function loadMixpanel(): Promise<void> {
    if (mp) return Promise.resolve();
    if (loadPromise) return loadPromise;

    const token = import.meta.env.PUBLIC_MIXPANEL_TOKEN;
    if (!token) return Promise.resolve();

    loadPromise = import('mixpanel-browser').then((mod) => {
        mp = mod.default;
        mp.init(token, {
            autocapture: true,
            record_sessions_percent: 100,
            api_host: 'https://api-eu.mixpanel.com',
        });
    });
    return loadPromise;
}

export function initAnalytics() {
    if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(() => loadMixpanel());
    } else {
        setTimeout(() => loadMixpanel(), 2000);
    }
}

export function trackEvent(name: string, props?: Record<string, unknown>) {
    loadMixpanel().then(() => mp?.track(name, props));
}

export function trackPageView(page: string) {
    trackEvent('Page View', { page, title: document.title });
}

export function setupPageTracking() {
    const page = window.location.pathname;

    trackPageView(page);

    let readingTracked = false;
    const readingTimer = setTimeout(() => {
        readingTracked = true;
        trackEvent('Reading Time 30s', { page });
    }, 30000);

    let scrollTracked = false;
    const onScroll = () => {
        if (scrollTracked) return;
        const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
        if (scrollPercent >= 0.5) {
            scrollTracked = true;
            trackEvent('Scroll 50%', { page });
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
        if (!readingTracked) clearTimeout(readingTimer);
        window.removeEventListener('scroll', onScroll);
    };
}

export function trackWhatsApp() {
    trackEvent('WhatsApp Click', { page: window.location.pathname });
}

export function trackEmail() {
    trackEvent('Email Click', { page: window.location.pathname });
}

export function trackSocial(platform: string) {
    trackEvent('Social Click', { platform, page: window.location.pathname });
}
