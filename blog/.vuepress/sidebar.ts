import type { SidebarConfig } from "vuepress-theme-gungnir"

export const sidebar: SidebarConfig = {
    "/docs/": [
        {
            text: '求职之路',
            link: "/docs/interview/README.md",
            children: [
                "/docs/interview/javascript.md",
                "/docs/interview/typescript.md",
                "/docs/interview/css.md"
            ]
        }
    ]
}
