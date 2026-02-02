import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "mwarner's blog",
  description: "Caffeine and Coding",

  srcExclude: ['**/README.md', '**/CLAUDE.md'],

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
      pattern: 'https://github.com/mlwarner/mlwarner.github.io/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
