const config = require('./config.json');

module.exports = {
  title: config.title,
  description: config.description,
  head: [
    [
      config.head[0][0],
      {
        rel: config.head[0][1].rel,
        href: config.head[0][1].href
      }
    ]
  ],
  themeConfig: {
      searchPlaceholder: config.themeConfig.searchPlaceholder,
      nav: [
          { text: config.themeConfig.nav[0].text, link: config.themeConfig.nav[0].link },
          { text: config.themeConfig.nav[1].text, link: config.themeConfig.nav[1].link },
          { text: config.themeConfig.nav[2].text, link: config.themeConfig.nav[2].link },
          {
              text: config.themeConfig.nav[3].text,
              ariaLabel: config.themeConfig.nav[3].ariaLabel,
              items: [
                { text: config.themeConfig.nav[3].items[0].text, link: config.themeConfig.nav[3].items[0].link },
                { text: config.themeConfig.nav[3].items[1].text, link: config.themeConfig.nav[3].items[1].link }
              ]
            }
      ]
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          const dayjs = require('dayjs')
          return dayjs(timestamp).format('MM-DD-YYYY')
        }
      }
    ]
  ]
}
