import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarVi: NavbarConfig = [
  { text: 'Trang Chủ', link: '/' },
  { text: 'Giới thiệu', link: '/guide/intro.md' },

  {
    text: '2D',
    children: [
      {
        text: 'Photoshop',
        children: [
          { text: 'Adobe Photoshop', link: '/photoshop/intro.md' },
        ],
      },
      {
        text: 'Tin Học',
        children: [
          { text: 'Nền Tảng CNTT', link: '/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/' },
        ],
      },
    ],
  },

  {
    text: '3D',
    children: [
      {
        text: 'Photoshop',
        children: [
          { text: 'Adobe Photoshop', link: '/photoshop/' },
        ],
      },
      {
        text: 'Tin Học',
        children: [
          { text: 'Nền Tảng CNTT', link: '/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/' },
        ],
      },
    ],
  },

  {
    text: 'Làm phim',
    children: [
      {
        text: 'Photoshop',
        children: [
          { text: 'Adobe Photoshop', link: '/photoshop/' },
        ],
      },
      {
        text: 'Tin Học',
        children: [
          { text: 'Nền Tảng CNTT', link: '/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/' },
        ],
      },
    ],
  },

]
