import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.codium.co/');
  await page.locator('div').filter({ hasText: /^Product Services$/ }).nth(1).click();
  await page.getByRole('link', { name: 'e-Tax Invoice & e-Receipt ระบบออกใบกำกับภาษีอิเล็กทรอนิกส์' }).click();
  let mouse = page.locator("text=เลือกจำนวนใบกำกับภาษีที่คุณออก/เดือน");
  await mouse.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  // await page.locator('div').filter({ hasText: 'เลือกจำนวนใบกำกับภาษีที่คุณออก/เดือนBelow 1,5001,501 - 10,00010,001 - 100,000Mor' }).nth(3).click();
  await page.getByRole('combobox').selectOption('100000');
  // await expect(page.getByText('CALCULATE')).toBeVisible();
  await expect(page.getByText('2,202,000 ฿')).toBeVisible();
  await expect(page.getByText('95,000฿')).toBeVisible();

});