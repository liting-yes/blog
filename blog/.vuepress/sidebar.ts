import type { SidebarConfig } from "vuepress-theme-gungnir"

export const sidebar: SidebarConfig = {
    "/docs/": [
        {
            text: '求职之路',
            link: "/docs/interview/README.md",
            children: [
                "/docs/interview/javascript.md",
                "/docs/interview/typescript.md",
                "/docs/interview/css.md",
                "/docs/interview/计算机网络.md",
                "/docs/interview/数据结构.md",
                "/docs/interview/算法思想.md",
            ]
        },
        {
            text: '读书笔记',
            link: '/docs/读书笔记/README.md',
            children: [
                {
                    text: '你不知道的JavaScript',
                    children: [
                        '/docs/你不知道的JavaScript/作用域和闭包.md',
                        '/docs/你不知道的JavaScript/词法作用域.md',
                    ]
                },
                {
                    text: 'Vue.js设计与实现',
                    children: [
                        '/docs/Vuejs设计与实现/命令式与声明式.md',
                        '/docs/Vuejs设计与实现/虚拟DOM.md',
                        '/docs/Vuejs设计与实现/运行时编译.md',
                        '/docs/Vuejs设计与实现/框架设计的核心要素.md',
                        '/docs/Vuejs设计与实现/组件的本质及相应的渲染实现.md',
                        '/docs/Vuejs设计与实现/响应式数据的简单实现.md',
                        '/docs/Vuejs设计与实现/不容易的数据响应实现.md',
                        '/docs/Vuejs设计与实现/计算属性.md',
                        '/docs/Vuejs设计与实现/watch侦听器.md'
                    ]
                }
            ]
        }
    ]
}
