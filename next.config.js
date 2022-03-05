/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'bit.ly',
      'image-component.nextjs.gallery',
      'localhost'
    ],
  },
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  trailingSlash: true,
  experimental: {
    outputStandalone: true,
  },
}
