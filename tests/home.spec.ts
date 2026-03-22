import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
    test('carica la home e mostra il contenuto principale', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Enrico Morano/);
        await expect(page.locator('header')).toBeVisible();
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    });

    test('ha meta description valorizzata', async ({ page }) => {
        await page.goto('/');
        const description = await page.locator('meta[name="description"]').getAttribute('content');
        expect(description).toBeTruthy();
        expect(description!.length).toBeGreaterThan(20);
    });

    test('il footer non è visibile inizialmente (pagina lunga)', async ({ page }) => {
        // Simula una pagina abbastanza lunga da avere scroll
        await page.goto('/');
        const hasScroll = await page.evaluate(() => document.body.scrollHeight > window.innerHeight);
        if (hasScroll) {
            await expect(page.locator('footer')).not.toBeVisible();
        }
    });

    test('il footer compare scrollando in fondo', async ({ page }) => {
        await page.goto('/');
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await expect(page.locator('footer')).toBeVisible({ timeout: 2000 });
        await expect(page.locator('footer a[href="https://github.com/Morry981"]')).toBeVisible();
        await expect(page.locator('footer a[href="https://www.linkedin.com/in/enrico-morano/"]')).toBeVisible();
    });

    test('lo skip-to-main link è presente', async ({ page }) => {
        await page.goto('/');
        const skip = page.locator('a[href="#main-content"]');
        await expect(skip).toBeAttached();
    });
});
