import { defineUserConfig } from "vuepress"
import type { GungnirThemeOptions } from "vuepress-theme-gungnir"
import { navbar } from "./navbar"
import { sidebar } from "./sidebar"

export default defineUserConfig<GungnirThemeOptions>({
	base: '/',
	lang: 'zh-cmn-Hans',
	title: '将焕',
	description: '将焕的个人博客',

	head: [
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: `/img/logo/favicon.png`
			},
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: `/img/logo/favicon.png`
			},
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
		{ rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
		],
		["meta", { name: "theme-color", content: "#377bb5" }],
		["meta", { name: "msapplication-TileColor", content: "#377bb5" }],
		["script", {src: "//cdn.jsdelivr.net/npm/@waline/client"}]
	],

	markdown: {
		extractHeaders: {
			level: [2, 3, 4, 5]
		},
		code: {
			lineNumbers: false
		}
	},

	bundler: process.env.DOCS_BUNDLER ?? "@vuepress/vite",

	theme: 'gungnir',
	themeConfig: {
		repo: 'https://github.com/JiangHuanLH/blog',
		docsDir: 'blog',
		docsBranch: 'master',
		editLinkPattern: ':repo/edit/:branch/:path',
		navbar: navbar,
		sidebar: sidebar,
		sidebarDepth: 1,
		lastUpdated: true,
		hitokoto: true,
		searchText: '搜索博客',
		searchIicon: 'fa-search',
		search: {
			locales: {
				'/': {
					placeholder: '搜索博客'
				}
			},
		},
		
		personalInfo: {
			name: '将焕',
			avatar: "/img/avatar.jpeg",
			description: 'Web前端爱好者',
			sns: {
				github: 'JiangHuanLH',
				zhihu: 'liu-mou-mou-94-79',
			}
		},

		homeHeaderImages: [
			{
				"path": 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2537/sights8.jpg',
				"mask": 'rgb(40, 57, 101, .4)'
			},
			{
				"path": 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2537/figure1.jpg',
				"mask": 'rgb(40, 57, 101, .4)'
			},
			{
				"path": 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2537/sights6.jpg',
				"mask": 'rgb(40, 57, 101, .4)'
			},
			{
				"path": 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2537/sights7.jpg',
				"mask": 'rgb(40, 57, 101, .4)'
			}
		],

		pages: {
			tags: {
				subtitle: '将焕博客大合集',
				bgImage: {
					path: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2537/sights4.jpg',
					mask: 'rbg(211, 136, 37, .5)'
				}
			},
			links: {
				subtitle: '将焕点开都说好的链接',
				bgImage: {
					path: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2537/sights13.png',
					mask: 'rbg(211, 136, 37, .5)'
				}
			}
		},

		footer: `
			<span>我在某年某月某日醒过来</span> & <a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2022005092号</a>
		`,
	},

	plugins: [
		[
			'vuepress-plugin-waline',
			{
				serverURL: 'https://blog-comment-rho-henna.vercel.app/',
				visitor: true,
				emoji: [
					'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq',
					'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili'
				],
				dark: 'auto',
				requiredMeta: ['nick'],
				wordLimit: 1000
			}
		],
		[
			"@renovamen/vuepress-plugin-rss",
			{
				siteURL: "https://blog-jianghuanlh.vercel.app/",
				title: "将焕的博客空间",
				description: "",
				copyright: "JiangHuanLH",
				count: 20,
				filter: (page) => true
			}
		],
		[
			"@renovamen/vuepress-plugin-baidu-tongji",
			{
			  "id": "719d2dd48e85fa622a25499e7d0f2324"
			}
		],
		[
            'vuepress-plugin-player',
            {
				disableSpace: false,
				songIds: ['29723011','1887893189','1421069053'],
                playlist: '7082462754',
                showPlaylist: false,
                disabledNetEaseMusic: true,
				serverUrl: 'https://netease-cloud-music-api-teal-psi.vercel.app/',
                localSongs: {
                    coverUrl: '/img/avatar.jpeg',
                    songs: [
                        {
                            path: '/song/1.mp3',
                            songName: '一直很安静',
							cover: '/img/avatar.jpeg'
                        },
                        {
                            path: '/song/2.mp3',
                            songName: '小幸运',
							cover: '/img/avatar.jpeg'
                        },
                        {
                            path: '/song/3.mp3',
                            songName: '牧马城市',
							cover: '/img/avatar.jpeg'
                        },
						{
                            path: '/song/4.mp3',
                            songName: '牵丝戏',
							cover: '/img/avatar.jpeg'
                        }
                    ]
                }
            }
        ]
	]
}) 
