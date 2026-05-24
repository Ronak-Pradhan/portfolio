/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Ronak Pradhan',
  author: 'Ronak Pradhan',
  headerTitle: 'Ronak Pradhan',
  description: 'Data scientist building ML systems at the intersection of research and production.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://ronak-pradhan.github.io/portfolio',
  siteRepo: 'https://github.com/Ronak-Pradhan/portfolio',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  // Reuses headshot until you add a dedicated 1200×630 OG image (optional).
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/avatar.jpg`,
  email: 'ronakprad@gmail.com',
  github: 'https://github.com/Ronak-Pradhan',
  linkedin: 'https://www.linkedin.com/in/ronak-pradhan/',
  locale: 'en-US',
  stickyNav: false,
  analytics: {},
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
