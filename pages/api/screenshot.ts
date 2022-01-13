import puppeteer from 'puppeteer'
import { NextApiRequest, NextApiResponse } from 'next'

async function getPage (): Promise<puppeteer.Page> {
  const browser = await puppeteer.launch()
  return await browser.newPage()
}

async function getScreenshot (url: string): Promise<string | void | Buffer> {
  const page = await getPage()
  await page.setViewport({ width: 2048, height: 1170 })
  await page.goto(url)
  return await page.screenshot({ type: 'png', encoding: 'base64' })
}

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const buffer = await getScreenshot('https://vercel.com/about')
  if (!buffer) {
    res.status(500).json({ msg: 'void' })
    return
  }

  if (buffer.length > 0) {
    res.status(200).json({url: buffer})
    return
  } else {
    res.status(500).json({ msg: 'fail' })
    return
  }
}
