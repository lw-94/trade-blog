import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Trade blog",
  description: "Record about trade",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '交易思维', link: '/trade-thinking' }
    ],

    sidebar: [
      {
        text: '交易相关',
        items: [
          { text: '交易思维', link: '/trade-thinking' },
          { text: '交易记录', link: '/trade-record' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lw-94/trade-blog' }
    ],
    
  }
})
