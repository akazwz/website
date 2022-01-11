import chrome from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'
import { NextApiRequest, NextApiResponse } from 'next'

async function getOptions () {
  return {
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  }
}

async function getPage (): Promise<puppeteer.Page> {
  const options = await getOptions()
  const browser = await puppeteer.launch(options)
  return await browser.newPage()
}

async function getScreenshot (url: string): Promise<string | void | Buffer> {
  const page = await getPage()
  await page.setViewport({ width: 2048, height: 1170 })
  await page.goto(url)
  return await page.screenshot({ type: 'png' })
}

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const buffer = await getScreenshot('https://vercel.com/about')
  if (!buffer) {
    res.status(500).json({ msg: 'void' })
    return
  }

  if (buffer.length > 0) {
    res.status(200).json({ msg: 'success' })
    return
  } else {
    res.status(500).json({ msg: 'fail' })
    return
  }
}
