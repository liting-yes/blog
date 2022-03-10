const { navbar } = require('./navbar.js')

module.exports = {
  base: '/blog/',

  head: [
    [
		"link",
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			href: `/img/logo/favicon-16x16.png`
		}
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "JiangHuan's Personal Blog" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "JiangHuan's Personal Blog" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/images/icons/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],
  locales: {
      "/": {
        lang: 'zh-cmn-Hans',
        title: '将焕',
        description: '将焕的个人博客'
      }
  },
  markdown: {
      extractHeaders: {
          level: [2, 3, 4, 5]
      },
      code: {
          lineNumbers: false
      }
  },

  bundler:
  process.env.DOCS_BUNDLER ??
  "@vuepress/vite",

  theme: 'gungnir',
  themeConfig: {
    repo: 'https://gitee.com/jiang-huan-web/blog.git',
    docsDir: 'docs',
    navbar: navbar,

    hitokoto: "https://v1.hitokoto.cn?c=d&c=i",
    
    personalInfo: {
        name: '将焕',
        avatar: "/img/avatar.jpeg",
        description: 'Web前端爱好者',
        sns: {
            github: 'JiangHuanLH',
            zhihu: '',
            email: '',
        }
    },
    homeHeaderImages: [
        {
            "path": '/img/home-bg/1.jpg',
            "mask": 'rgb(40, 57, 101, .4)'
        },
        {
            "path": '/img/home-bg/2.jpg',
            "mask": 'rgb(40, 57, 101, .4)'
        },
        {
            "path": '/img/home-bg/3.jpg',
            "mask": 'rgb(40, 57, 101, .4)'
        },
        {
            "path": '/img/home-bg/4.jpg',
            "mask": 'rgb(40, 57, 101, .4)'
        }
    ],
    pages: {
        tags: {
            subtitle: '标签页',
            bgImage: {
                path: '/img/pages/tags.jpg',
                mask: 'rbg(211, 136, 37, .5)'
            }
        }
    },

    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: '搜索博客',
    searchIcon: 'ri-archive-drawer-line',

    footer: `
        <span>我在某年某月某日醒过来</span>
        <br />
        Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
        <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  }
}