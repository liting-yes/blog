import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { navbar } from './navbar'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/blog/',
  lang: 'zh-cmn-Hans',
  title: '将焕',
  description: '将焕的个人博客',
  head: [
      [
          'link',{
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: '/img/logo/favicon-16x16.png'
          }
      ]
  ],
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
    hitokoto: "https://v1.hitokoto.cn?c=d&c=i",
    
    personalInfo: {
        name: '将焕',
        avatar: "/img/avatar.jpeg",
        description: 'Web前端爱好者',
        sns: {
            github: '',
            zhihu: '',
            email: '',
        }
    },
    homeHeaderImages: {
        local: [
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
        ]
    },
    pages: {
        tags: {
            subtitle: '标签页',
            bgImage: {
                path: '/img/pages/tags.jpg',
                mask: 'rbg(211, 136, 37, .5)'
            }
        },
        links: {
            subtitle: '链接页',
            bgImage: {
                path: '/img/pages/links.jpg',
                mask: 'rbg(211, 136, 37, .5)'
            }
        },
    },

    locales: {
        "/": {
            navbar: navbar
        }
    },

    catalog: false,
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: '搜索',
    searchIcon: 'ri-search-2-line',

    footer: `
        <span>我在某年某月某日醒过来</span>
        <br />
        Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
        <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  }
})