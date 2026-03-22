import { test, expect } from '@playwright/test';

test.describe('Pagina Progetti', () => {
    test('mostra le card dei progetti', async ({ page }) => {
        await page.goto('/projects');
        const cards = page.locator('article');
        await expect(cards.first()).toBeVisible();
        const count = await cards.count();
        expect(count).toBeGreaterThanOrEqual(1);
    });

    test('le card mostrano titolo, descrizione e tag', async ({ page }) => {
        await page.goto('/projects');
        const firstCard = page.locator('article').first();
        await expect(firstCard.locator('h3')).toBeVisible();
        await expect(firstCard.locator('p')).toBeVisible();
        await expect(firstCard.locator('span').first()).toBeVisible();
    });

    test('i link esterni hanno rel="noopener noreferrer"', async ({ page }) => {
        await page.goto('/projects');
        const externalLinks = page.locator('article a[target="_blank"]');
        const count = await externalLinks.count();
        for (let i = 0; i < count; i++) {
            const rel = await externalLinks.nth(i).getAttribute('rel');
            expect(rel).toBe('noopener noreferrer nofollow');
        }
    });
});
