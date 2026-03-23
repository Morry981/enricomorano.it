import { describe, it, expect, vi } from 'vitest';

describe('middleware redirect logic', () => {
    const publicDirs = ['/images', '/fonts'];

    const shouldRedirect = (pathname: string) => {
        const path = pathname.replace(/\/+$/, '') || '/';
        return publicDirs.includes(path);
    };

    it('redirect /images a /', () => {
        expect(shouldRedirect('/images')).toBe(true);
        expect(shouldRedirect('/images/')).toBe(true);
    });

    it('redirect /fonts a /', () => {
        expect(shouldRedirect('/fonts')).toBe(true);
        expect(shouldRedirect('/fonts/')).toBe(true);
    });

    it('non redirect file specifici', () => {
        expect(shouldRedirect('/images/foto-profilo.jpg')).toBe(false);
        expect(shouldRedirect('/fonts/black-ops-one-latin.woff2')).toBe(false);
    });

    it('non redirect le pagine normali', () => {
        expect(shouldRedirect('/')).toBe(false);
        expect(shouldRedirect('/progetti')).toBe(false);
        expect(shouldRedirect('/competenze')).toBe(false);
        expect(shouldRedirect('/chi-sono')).toBe(false);
    });
});
