import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'

const fetchCanvas = (canvasName) => {
  const canvasPath = path.resolve('./canvases/', `${canvasName}.html`)
  return fs.readFileSync(canvasPath, 'utf8');
}

const Painter = async (canvasName) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const canvasCode = fetchCanvas(canvasName)

  await page.setContent(canvasCode);

  const contentElement = await page.$('#canvas-content');
  await contentElement.screenshot({
    path: `results/${Date.now()}.png`,
    omitBackground: true,
  });

  await browser.close();
}

export default Painter