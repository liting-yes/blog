import type { NavbarConfig } from "vuepress-theme-gungnir"

export const navbar: NavbarConfig =  [
	{
		text: "首页",
		link: "/",
		icon: "fa-fort-awesome"
	},
	{
		text: "文档",
		link: "/docs/interview/README.md",
		icon: "fa-book"
	},
	{
		text: "标签",
		link: "/tags/",
		icon: "fa-tag"
	},
	{
		text: '链接',
		link: "/links/",
		icon: "fa-link"
	}
]