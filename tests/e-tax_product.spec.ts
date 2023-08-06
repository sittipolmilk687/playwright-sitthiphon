import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.codium.co/');
  await page.locator('div').filter({ hasText: /^Product Services$/ }).nth(1).click();
  await page.getByRole('link', { name: 'e-Tax Invoice & e-Receipt ระบบออกใบกำกับภาษีอิเล็กทรอนิกส์' }).click();
  let mouse = page.locator("text=เลือกจำนวนใบกำกับภาษีที่คุณออก/เดือน");
  await mouse.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.getByRole('combobox').selectOption('100000');
  await expect(page.getByText('2,202,000 ฿')).toBeVisible();
  await expect(page.getByText('95,000฿')).toBeVisible();

});