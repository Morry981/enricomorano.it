import { defineMiddleware } from 'astro:middleware';

const publicDirs = ['/images', '/fonts'];

const redirects: Record<string, string> = {
    '/projects': '/progetti',
    '/skills': '/competenze',
    '/about-me': '/chi-sono',
};

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

    return next();
});
