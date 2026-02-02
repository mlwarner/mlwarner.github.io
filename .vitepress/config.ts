import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "mwarner's blog",
  description: "Caffeine and Coding",

  srcDir: 'docs',

  themeConfig: {
    nav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mlwarner' }
    ],

    footer: {
      message: '',
      copyright: `Copyright © ${new Date().getFullYear()} mwarner's blog`
    },

    editLink: {
      pattern: 'https://github.com/mlwarner/mlwarner.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
