import path from 'path'
import puppeteer from 'puppeteer'

// helpers
const buildQueryParams = (params) => Object.entries(params).map(([k, v]) => `${k}=${v}`).join('&')
const buildCanvasPath = (canvasName) => path.resolve('./canvases/', `${canvasName}.html`)

// main
const Painter = async (canvasName, canvasParams = {}) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const canvasPath = buildCanvasPath(canvasName)
  const queryParams = buildQueryParams(canvasParams)

  await page.goto(`file://${canvasPath}?${queryParams}`);

  const canvasContent = await page.$('#canvas-content');
  await canvasContent.screenshot({
    path: `results/${Date.now()}.png`,
    omitBackground: true,
  });

  await browser.close();
}

export default Painter