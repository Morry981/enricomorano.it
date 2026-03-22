import { test, expect } from '@playwright/test';

const pages = [
    { path: '/', titlePattern: /Enrico Morano/, heading: 'Enrico' },
    { path: '/projects', titlePattern: /Progetti/, heading: 'I miei Progetti' },
    {
        path: '/skills',
        titlePattern: /Competenze/,
        heading: 'Le mie Competenze',
    },
    { path: '/about-me', titlePattern: /Chi Sono/, heading: 'Io sono Enrico' },
];

test.describe('Navigazione tra pagine', () => {
    for (const { path, titlePattern, heading } of pages) {
        test(`${path} - titolo e heading corretti`, async ({ page }) => {
            await page.goto(path);
            await expect(page).toHaveTitle(titlePattern);
            await expect(page.getByRole('heading', { level: 1 })).toContainText(heading);
        });

        test(`${path} - ha meta description`, async ({ page }) => {
            await page.goto(path);
            const desc = await page
                .locator('meta[name="description"]')
                .getAttribute('content');
            expect(desc).toBeTruthy();
            expect(desc!.length).toBeGreaterThan(20);
        });
    }

    test('nav ha il link attivo evidenziato sulla home', async ({ page }) => {
        await page.goto('/');
        const activeLink = page.locator('nav a[aria-current="page"]');
        await expect(activeLink).toBeVisible();
        await expect(activeLink).toHaveAttribute('href', '/');
    });

    test('navigazione da home a Progetti via nav', async ({ page }) => {
        await page.goto('/');
        await page
            .locator('nav')
            .getByRole('link', { name: 'Progetti' })
            .click();
        await expect(page).toHaveTitle(/Progetti/);
        await expect(
            page.locator('nav a[aria-current="page"]'),
        ).toHaveAttribute('href', '/projects');
    });

    test('navigazione da home a Chi Sono via nav', async ({ page }) => {
        await page.goto('/');
        await page
            .locator('nav')
            .getByRole('link', { name: 'Chi Sono' })
            .click();
        await expect(page).toHaveTitle(/Chi Sono/);
    });
});
