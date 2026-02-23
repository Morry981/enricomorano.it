import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should navigate to home page and display main content', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Enrico Morano/); // Verifica il titolo della pagina

    // Verifica che l'header sia presente
    await expect(page.locator('header')).toBeVisible();

    // Verifica che il testo "Ciao, sono Enrico" sia presente
    await expect(page.getByText('Ciao, sono Enrico')).toBeVisible();

    // Verifica che il footer non sia visibile inizialmente (senza scroll)
    await expect(page.locator('footer')).not.toBeVisible();
  });

  test('should navigate to Chi Sono page with hero transition', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Chi Sono').click(); // Clicca sul link "Chi Sono"

    await expect(page).toHaveTitle(/Chi Sono/); // Verifica il titolo della nuova pagina
    await expect(page.getByText('Chi Sono')).toBeVisible(); // Verifica il titolo "Chi Sono"
  });

  test('should navigate to Progetti page with slide transition', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Progetti').click(); // Clicca sul link "Progetti"

    await expect(page).toHaveTitle(/Progetti/); // Verifica il titolo della nuova pagina
    await expect(page.getByText('Progetti')).toBeVisible(); // Verifica il titolo "Progetti"
  });

  test('should show footer on scroll', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); // Scorri fino in fondo

    await expect(page.locator('footer')).toBeVisible(); // Verifica che il footer sia ora visibile
    await expect(page.locator('footer a.spam-filter')).toBeVisible(); // Verifica l'email nel footer
    await expect(page.locator('footer a.spam-filter')).toHaveAttribute('href', 'mailto:info@enricomorano.it'); // Verifica l'href dell'email
  });
});
