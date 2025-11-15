import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function captureSlides() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 }
  });

  // Navigate to localhost
  await page.goto('http://localhost:3001');

  // Wait for page to load
  await page.waitForTimeout(2000);

  const slideNames = [
    '01-cover',
    '02-intention',
    '03-problem',
    '04-concept',
    '05-experience',
    '06-hardware'
  ];

  // Capture each slide
  for (let i = 0; i < slideNames.length; i++) {
    console.log(`Capturing slide ${i + 1}/${slideNames.length}: ${slideNames[i]}`);

    // Take screenshot
    await page.screenshot({
      path: `/Users/yjy/Desktop/${slideNames[i]}.png`,
      fullPage: false
    });

    // Navigate to next slide (except for last one)
    if (i < slideNames.length - 1) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(500);
    }
  }

  await browser.close();
  console.log('All slides captured to Desktop!');
}

captureSlides().catch(console.error);
