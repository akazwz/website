/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['bit.ly'],
  },
  i18n: {
    locales: ['default', 'en-US', 'zh-CN'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
}
