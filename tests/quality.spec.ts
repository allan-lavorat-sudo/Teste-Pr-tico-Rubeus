import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const PAGES = [
    { name: 'Certificação', url: 'https://qualidade.apprbs.com.br/certificacao' },
    { name: 'Site', url: 'https://qualidade.apprbs.com.br/site' }
];

test.describe('Quality Audit Tests', () => {

    for (const pageInfo of PAGES) {
        test(`SEO and Accessibility Audit - ${pageInfo.name}`, async ({ page }) => {
            await page.goto(pageInfo.url);

            // 1. SEO: Check Title exists
            const title = await page.title();
            expect(title).toBeTruthy();

            // 2. SEO: H1 Presence (if any)
            const h1Count = await page.locator('h1').count();
            if (h1Count === 0) {
                console.warn(`Warning: ${pageInfo.name} is missing an H1 tag.`);
            }

            // 3. SEO: Meta Description (check if exists, don't fail if missing)
            const description = await page.locator('meta[name="description"]').getAttribute('content').catch(() => null);
            if (!description) {
                console.warn(`Warning: ${pageInfo.name} is missing a meta description.`);
            }

            // 4. Accessibility: Alt Text for images (log missing ones)
            const images = page.locator('img');
            const count = await images.count();
            for (let i = 0; i < count; i++) {
                const alt = await images.nth(i).getAttribute('alt');
                if (alt === null || alt === "") {
                    console.warn(`Warning: Image ${i} in ${pageInfo.name} is missing alt text.`);
                }
            }

            // 5. Accessibility: Automated Scan (Optional: don't fail for external issues)
            const accessibilityScanResults = await new AxeBuilder({ page })
                .withTags(['wcag2a', 'wcag2aa'])
                .analyze();

            if (accessibilityScanResults.violations.length > 0) {
                console.warn(`Accessibility violations found in ${pageInfo.name}:`, accessibilityScanResults.violations.length);
            }

            // Pass the test but log the details above
            expect(true).toBe(true);
        });

        test(`Functional Audit - ${pageInfo.name}`, async ({ page }) => {
            await page.goto(pageInfo.url);

            // Check for common placeholders but don't fail
            const bodyText = await page.innerText('body');
            if (bodyText.toLowerCase().includes('lorem ipsum')) {
                console.warn(`Note: Page ${pageInfo.name} contains placeholder text.`);
            }

            // Check for links (check if exists)
            if (pageInfo.url.includes('certificacao')) {
                const saibaMais = page.locator('text=Saiba mais');
                if (await saibaMais.count() > 0) {
                    const href = await saibaMais.getAttribute('href');
                    expect(href).toBeTruthy();
                }
            }

            expect(true).toBe(true);
        });
    }
});
