import type { SidebarConfig } from "vuepress-theme-gungnir"

export const sidebar: SidebarConfig = {
    "/docs/": [
        {
            text: '前端',
            children: [
                {
                    text: 'JavaScript',
                    link: "/docs/front-end/javascript.md"
                },
                {
                    text: 'TypeScript',
                    link: "/docs/front-end/typescript.md"
                },
                {
                    text: 'CSS',
                    link: "/docs/front-end/css.md"
                }
            ]
        }
    ]
}
