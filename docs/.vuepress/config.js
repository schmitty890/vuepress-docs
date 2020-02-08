const config = require('./config.json');

console.log('here');
console.log(config);
console.log(config.themeConfig.nav[1].text);
module.exports = {
  title: config.title,
  description: config.description,
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
      ],
      lastUpdated: config.themeConfig.lastUpdated
  }
}
