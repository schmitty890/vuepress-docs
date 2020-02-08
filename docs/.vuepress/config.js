module.exports = {
    title: 'Bank of America Front End Engineering',
    description: 'Just playing around',
    themeConfig: {
        searchPlaceholder: 'Search for it!',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' }
                ]
              }
        ]
    }
  }
