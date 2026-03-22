import { defineMiddleware } from 'astro:middleware';

const publicDirs = ['/images', '/fonts'];

export const onRequest = defineMiddleware(({ url }, next) => {
    const path = url.pathname.replace(/\/+$/, '') || '/';

    if (publicDirs.includes(path)) {
        return new Response(null, {
            status: 301,
            headers: { Location: '/' },
        });
    }

    return next();
});
