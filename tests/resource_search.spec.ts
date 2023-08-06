import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.codium.co/');
  await page.locator('div').filter({ hasText: /^Newsfeed$/ }).nth(1).click();
  await page.getByRole('link', { name: 'Resources พื้นที่แห่งการเรียนรู้' }).click();
  await page.getByPlaceholder('search').click();
  await page.getByPlaceholder('search').fill('e-Memo');
  await expect(page.getByText('e-Memo ระบบลงลายมือชื่ออิเล็กทรอนิกส์')).toBeVisible();
});

