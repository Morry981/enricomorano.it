import { defineMiddleware } from 'astro:middleware';

const publicDirs = ['/images', '/fonts'];

const redirects: Record<string, string> = {
    '/projects': '/progetti',
    '/skills': '/competenze',
    '/about-me': '/chi-sono',
};

export const onRequest = defineMiddleware(({ url }, next) => {
    const path = url.pathname.replace(/\/+$/, '') || '/';

    if (publicDirs.includes(path)) {
        return new Response(null, {
            status: 301,
            headers: { Location: '/' },
        });
    }

    const target = redirects[path];
    if (target) {
        const dest = new URL(target, url.origin);
        dest.search = url.search;
        dest.hash = url.hash;
        return new Response(null, {
            status: 301,
            headers: { Location: dest.toString() },
        });
    }

    return next();
});
