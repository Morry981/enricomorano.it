import { defineMiddleware } from 'astro:middleware';

const publicDirs = ['/images', '/fonts'];

const redirects: Record<string, string> = {
    '/projects': '/progetti',
    '/skills': '/competenze',
    '/about-me': '/chi-sono',
};

const securityHeaders: Record<string, string> = {
    'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https:",
        "connect-src 'self' https://api-eu.mixpanel.com",
        "font-src 'self'",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'",
    ].join('; '),
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

function applySecurityHeaders(response: Response): Response {
    for (const [key, value] of Object.entries(securityHeaders)) {
        response.headers.set(key, value);
    }
    return response;
}

export const onRequest = defineMiddleware(({ url }, next) => {
    const path = url.pathname.replace(/\/+$/, '') || '/';

    if (path !== '/' && url.pathname.endsWith('/')) {
        return new Response(null, {
            status: 301,
            headers: { Location: path + url.search },
        });
    }

    if (publicDirs.includes(path)) {
        return new Response(null, {
            status: 301,
            headers: { Location: '/' },
        });
    }

    const target = redirects[path];
    if (target) {
        return new Response(null, {
            status: 301,
            headers: { Location: target + url.search },
        });
    }

    return next().then(applySecurityHeaders);
});
