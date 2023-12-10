import {protocols} from '~/tests/constants';
import { test, expect } from '@playwright/test';

test.describe('A Test', () => {
  console.debug('protocols', protocols)
  await page.goto('https://github.com');
  await page.pause()
  await expect(page.getByLabel('Github')).toBeDefined()
})