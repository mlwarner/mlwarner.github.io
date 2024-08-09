import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "mwarner's blog",
    description: "A blog about caffeine and coding",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About me', link: '/about-me' }
        ],
        editLink: {
            pattern: 'https://github.com/mlwarner/mlwarner.github.io/edit/main/docs/:path'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/mlwarner' }
        ],
        outline: 'deep',
    },
    vite: {
        server: {
            host: true,
        },
    },
})
