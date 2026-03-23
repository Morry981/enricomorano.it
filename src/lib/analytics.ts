import mixpanel from 'mixpanel-browser';

let initialized = false;

export function initAnalytics() {
    if (initialized) return;
    initialized = true;

    const token = import.meta.env.PUBLIC_MIXPANEL_TOKEN;
    if (!token) return;

    mixpanel.init(token, {
        autocapture: true,
        record_sessions_percent: 100,
        api_host: 'https://api-eu.mixpanel.com',
    });
}

export function trackEvent(name: string, props?: Record<string, unknown>) {
    mixpanel.track(name, props);
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
