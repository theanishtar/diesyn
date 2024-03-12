import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { head, navbarVi, sidebarVi, } from './configs/index.js'
import { GiscusCommentPlugin } from 'vuepress-plugin-giscus-comment';
import { getDirname, path } from '@vuepress/utils'


const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  // set site base to default value
  base: '/',

  // extra tags in `<head>`
  head,
  locales: {
    '/': {
      lang: 'vi',
      title: 'diesyn',
      description:
        'Môi trường học tập lý tưởng cho sinh viên Thiết kế đồ họa',
    },
  },
  lang: 'en-US',

  title: 'diesyn',
  description: 'Website chi se kien thuc ve thiet ke',

  theme: defaultTheme({
    logo: 'https://github.com/dangtranhuu/images/blob/main/cat/08-15-27-06-cat_ready.gif?raw=true',

    // navbar: ['/', '/get-started',
    //   {
    //     text: 'Tips & Track',
    //     link: '/ps/',
    //   },
    // ],
    // navbar: navbarVi,

    // sidebar: sidebarVi,
    locales: {
      '/': {
        navbar: navbarVi,
        sidebar: sidebarVi,

        //! Custom page meta
        //* Link Reference: https://v2.vuepress.vuejs.org/reference/default-theme/config.html#locale-config
        lastUpdatedText: 'Cập nhật lúc ',
        contributorsText: 'Tác giả'
      },
    },
  }),



  bundler: viteBundler(),
  // configure markdown
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@vuepress/, path.resolve(__dirname, '../../ecosystem')),
    },
  },
  // plugins: [
  //   ['@vuepress/search', {
  //     searchMaxSuggestions: 10
  //   }]
  // ]
  plugins: [
    new GiscusCommentPlugin({
      // mapping: 'url',
      // reactionsEnabled: false,
      // emitMetadata: true,
      theme: 'dark',
      inputPosition: 'top',
      lazyLoading: false,
      lang: "vi",
      darkTheme: "https://blog.zxh.io/styles/giscus-dark.css",
      repo: "dangth12/blog-giscus-comments",
      repoId: "R_kgDOJpeyjQ",
      category: "Announcements",
      categoryId: "DIC_kwDOJpeyjc4CW2KO",
      lazyLoad: true
    }),

    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components')
      }
    ]
  ]
})
