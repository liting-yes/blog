import { defineUserConfig } from "vuepress"
import type { GungnirThemeOptions } from "vuepress-theme-gungnir"
import { navbar } from "./navbar"
import { sidebar } from "./sidebar"

export default defineUserConfig<GungnirThemeOptions>({
	base: '/',

	head: [
		[
			"link",
			{
				rel: "icon",
				type: "image/x-ico",
				sizes: "16x16",
				href: `/img/logo/favicon-16x16.ico`
			}
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/x-ico",
				sizes: "32x32",
				href: `/img/logo/favicon-32x32.ico`
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
		{ rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
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

	bundler: process.env.DOCS_BUNDLER ?? "@vuepress/vite",

	theme: 'gungnir',
	themeConfig: {
		repo: 'https://github.com/JiangHuanLH/blog-dcos.git',
		docsDir: 'blog',
		docsBranch: 'master',
		navbar: navbar,
		sidebar: sidebar,
		hitokoto: true,
		search: false,
		
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
				subtitle: '将焕博客大合集',
				bgImage: {
					path: '/img/pages/tags.jpg',
					mask: 'rbg(211, 136, 37, .5)'
				}
			},
			links: {
				subtitle: '将焕点开都说好的链接',
				bgImage: {
					path: '/img/pages/links.jpg',
					mask: 'rbg(211, 136, 37, .5)'
				}
			}
		},

		footer: `
			<span>我在某年某月某日醒过来</span>
			<br />
			Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
			<a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
		`,

		themePlugins: {
			giscus: {
			repo: "JiangHuanLH/blog",
			repoId: "R_kgDOG_PX3g",
			category: "Announcements",
			categoryId: "DIC_kwDOG_PX3s4COFHh",
			mapping: "pathname",
			reactionsEnabled: true,
			lang: "zh-CN",
			crossorigin: "anonymous",
			theme: "light",
			darkTheme: "dark_dimmed"
			}
		}
	}
}) 
