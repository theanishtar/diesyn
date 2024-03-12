// docs/.vuepress/config.js
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

// docs/.vuepress/configs/head.ts
var head = [
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: `/images/icons/favicon-16x16.png`
    }
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: `/images/icons/favicon-32x32.png`
    }
  ],
  ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
  ["meta", { name: "application-name", content: "VuePress" }],
  ["meta", { name: "apple-mobile-web-app-title", content: "VuePress" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  [
    "link",
    { rel: "apple-touch-icon", href: `/images/icons/apple-touch-icon.png` }
  ],
  [
    "link",
    {
      rel: "mask-icon",
      href: "/images/icons/safari-pinned-tab.svg",
      color: "#3eaf7c"
    }
  ],
  ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
  ["meta", { name: "theme-color", content: "#3eaf7c" }]
];

// docs/.vuepress/configs/navbar/vi.ts
var navbarVi = [
  { text: "Trang Ch\u1EE7", link: "/" },
  { text: "Gi\u1EDBi thi\u1EC7u", link: "/guide/intro.md" },
  {
    text: "2D",
    children: [
      {
        text: "Photoshop",
        children: [
          { text: "Adobe Photoshop", link: "/photoshop/intro.md" }
        ]
      },
      {
        text: "Tin H\u1ECDc",
        children: [
          { text: "N\u1EC1n T\u1EA3ng CNTT", link: "/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/" }
        ]
      }
    ]
  },
  {
    text: "3D",
    children: [
      {
        text: "Photoshop",
        children: [
          { text: "Adobe Photoshop", link: "/photoshop/" }
        ]
      },
      {
        text: "Tin H\u1ECDc",
        children: [
          { text: "N\u1EC1n T\u1EA3ng CNTT", link: "/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/" }
        ]
      }
    ]
  },
  {
    text: "L\xE0m phim",
    children: [
      {
        text: "Photoshop",
        children: [
          { text: "Adobe Photoshop", link: "/photoshop/" }
        ]
      },
      {
        text: "Tin H\u1ECDc",
        children: [
          { text: "N\u1EC1n T\u1EA3ng CNTT", link: "/nhapmon/CT200-Nen_tang_cong_nghe_thong_tin/" }
        ]
      }
    ]
  }
];

// docs/.vuepress/configs/sidebar/vi.ts
var sidebarVi = {
  //! -----Begin: Guide
  "/guide/": [
    "/guide/intro.md",
    "/guide/desc.md",
    "/guide/tutorial.md",
    "/guide/contribution.md",
    "/guide/source.md"
  ],
  "/photoshop/": [
    "/photoshop/intro.md",
    "/photoshop/install.md"
  ]
};

// docs/.vuepress/config.js
import { GiscusCommentPlugin } from "vuepress-plugin-giscus-comment";
var __vite_injected_original_dirname = "E:/design-web/v2/vuepress-starter/docs/.vuepress";
var config_default = defineUserConfig({
  // set site base to default value
  base: "/",
  // extra tags in `<head>`
  head,
  locales: {
    "/": {
      lang: "vi",
      title: "diesyn",
      description: "M\xF4i tr\u01B0\u1EDDng h\u1ECDc t\u1EADp l\xFD t\u01B0\u1EDFng cho sinh vi\xEAn Thi\u1EBFt k\u1EBF \u0111\u1ED3 h\u1ECDa"
    }
  },
  lang: "en-US",
  title: "diesyn",
  description: "Website chi se kien thuc ve thiet ke",
  theme: defaultTheme({
    logo: "https://github.com/dangtranhuu/images/blob/main/cat/08-15-27-06-cat_ready.gif?raw=true",
    // navbar: ['/', '/get-started',
    //   {
    //     text: 'Tips & Track',
    //     link: '/ps/',
    //   },
    // ],
    // navbar: navbarVi,
    // sidebar: sidebarVi,
    locales: {
      "/": {
        navbar: navbarVi,
        sidebar: sidebarVi,
        //! Custom page meta
        //* Link Reference: https://v2.vuepress.vuejs.org/reference/default-theme/config.html#locale-config
        lastUpdatedText: "C\u1EADp nh\u1EADt l\xFAc ",
        contributorsText: "T\xE1c gi\u1EA3"
      }
    }
  }),
  bundler: viteBundler(),
  // configure markdown
  markdown: {
    importCode: {
      handleImportPath: (str) => str.replace(/^@vuepress/, path.resolve(__vite_injected_original_dirname, "../../ecosystem"))
    }
  },
  // plugins: [
  //   ['@vuepress/search', {
  //     searchMaxSuggestions: 10
  //   }]
  // ]
  plugins: [
    new GiscusCommentPlugin({
      repo: "[ENTER REPOSITORY NAME HERE]",
      repoId: "[ENTER REPOSITORY ID HERE]",
      category: "[ENTER CATEGORY NAME HERE]",
      categoryId: "[ENTER CATEGORY ID HERE]",
      mapping: "url",
      reactionsEnabled: false,
      emitMetadata: true,
      theme: "dark",
      inputPosition: "top",
      lang: "en",
      lazyLoading: false
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvaGVhZC50cyIsICJkb2NzLy52dWVwcmVzcy9jb25maWdzL25hdmJhci92aS50cyIsICJkb2NzLy52dWVwcmVzcy9jb25maWdzL3NpZGViYXIvdmkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9kZXNpZ24td2ViL3YyL3Z1ZXByZXNzLXN0YXJ0ZXIvZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGRlc2lnbi13ZWJcXFxcdjJcXFxcdnVlcHJlc3Mtc3RhcnRlclxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2Rlc2lnbi13ZWIvdjIvdnVlcHJlc3Mtc3RhcnRlci9kb2NzLy52dWVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tICdAdnVlcHJlc3MvdGhlbWUtZGVmYXVsdCdcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tICd2dWVwcmVzcy9jbGknXG5pbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXZpdGUnXG4vLyBpbXBvcnQgeyBkb2NzZWFyY2hQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLWRvY3NlYXJjaCdcbmltcG9ydCB7IGhlYWQsIG5hdmJhclZpLCBzaWRlYmFyVmksIH0gZnJvbSAnLi9jb25maWdzL2luZGV4LmpzJ1xuaW1wb3J0IHsgR2lzY3VzQ29tbWVudFBsdWdpbiB9IGZyb20gJ3Z1ZXByZXNzLXBsdWdpbi1naXNjdXMtY29tbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICAvLyBzZXQgc2l0ZSBiYXNlIHRvIGRlZmF1bHQgdmFsdWVcbiAgYmFzZTogJy8nLFxuXG4gIC8vIGV4dHJhIHRhZ3MgaW4gYDxoZWFkPmBcbiAgaGVhZCxcbiAgbG9jYWxlczoge1xuICAgICcvJzoge1xuICAgICAgbGFuZzogJ3ZpJyxcbiAgICAgIHRpdGxlOiAnZGllc3luJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnTVx1MDBGNGkgdHJcdTAxQjBcdTFFRERuZyBoXHUxRUNEYyB0XHUxRUFEcCBsXHUwMEZEIHRcdTAxQjBcdTFFREZuZyBjaG8gc2luaCB2aVx1MDBFQW4gVGhpXHUxRUJGdCBrXHUxRUJGIFx1MDExMVx1MUVEMyBoXHUxRUNEYScsXG4gICAgfSxcbiAgfSxcbiAgbGFuZzogJ2VuLVVTJyxcblxuICB0aXRsZTogJ2RpZXN5bicsXG4gIGRlc2NyaXB0aW9uOiAnV2Vic2l0ZSBjaGkgc2Uga2llbiB0aHVjIHZlIHRoaWV0IGtlJyxcblxuICB0aGVtZTogZGVmYXVsdFRoZW1lKHtcbiAgICBsb2dvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Rhbmd0cmFuaHV1L2ltYWdlcy9ibG9iL21haW4vY2F0LzA4LTE1LTI3LTA2LWNhdF9yZWFkeS5naWY/cmF3PXRydWUnLFxuXG4gICAgLy8gbmF2YmFyOiBbJy8nLCAnL2dldC1zdGFydGVkJyxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdGV4dDogJ1RpcHMgJiBUcmFjaycsXG4gICAgLy8gICAgIGxpbms6ICcvcHMvJyxcbiAgICAvLyAgIH0sXG4gICAgLy8gXSxcbiAgICAvLyBuYXZiYXI6IG5hdmJhclZpLFxuXG4gICAgLy8gc2lkZWJhcjogc2lkZWJhclZpLFxuICAgIGxvY2FsZXM6IHtcbiAgICAgICcvJzoge1xuICAgICAgICBuYXZiYXI6IG5hdmJhclZpLFxuICAgICAgICBzaWRlYmFyOiBzaWRlYmFyVmksXG5cbiAgICAgICAgLy8hIEN1c3RvbSBwYWdlIG1ldGFcbiAgICAgICAgLy8qIExpbmsgUmVmZXJlbmNlOiBodHRwczovL3YyLnZ1ZXByZXNzLnZ1ZWpzLm9yZy9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9jb25maWcuaHRtbCNsb2NhbGUtY29uZmlnXG4gICAgICAgIGxhc3RVcGRhdGVkVGV4dDogJ0NcdTFFQURwIG5oXHUxRUFEdCBsXHUwMEZBYyAnLFxuICAgICAgICBjb250cmlidXRvcnNUZXh0OiAnVFx1MDBFMWMgZ2lcdTFFQTMnXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuXG5cblxuICBidW5kbGVyOiB2aXRlQnVuZGxlcigpLFxuICAvLyBjb25maWd1cmUgbWFya2Rvd25cbiAgbWFya2Rvd246IHtcbiAgICBpbXBvcnRDb2RlOiB7XG4gICAgICBoYW5kbGVJbXBvcnRQYXRoOiAoc3RyKSA9PlxuICAgICAgICBzdHIucmVwbGFjZSgvXkB2dWVwcmVzcy8sIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9lY29zeXN0ZW0nKSksXG4gICAgfSxcbiAgfSxcbiAgLy8gcGx1Z2luczogW1xuICAvLyAgIFsnQHZ1ZXByZXNzL3NlYXJjaCcsIHtcbiAgLy8gICAgIHNlYXJjaE1heFN1Z2dlc3Rpb25zOiAxMFxuICAvLyAgIH1dXG4gIC8vIF1cbiAgcGx1Z2luczogW1xuICAgIG5ldyBHaXNjdXNDb21tZW50UGx1Z2luKHtcbiAgICAgIHJlcG86ICdbRU5URVIgUkVQT1NJVE9SWSBOQU1FIEhFUkVdJyxcbiAgICAgIHJlcG9JZDogJ1tFTlRFUiBSRVBPU0lUT1JZIElEIEhFUkVdJyxcbiAgICAgIGNhdGVnb3J5OiAnW0VOVEVSIENBVEVHT1JZIE5BTUUgSEVSRV0nLFxuICAgICAgY2F0ZWdvcnlJZDogJ1tFTlRFUiBDQVRFR09SWSBJRCBIRVJFXScsXG4gICAgICBtYXBwaW5nOiAndXJsJyxcbiAgICAgIHJlYWN0aW9uc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgZW1pdE1ldGFkYXRhOiB0cnVlLFxuICAgICAgdGhlbWU6ICdkYXJrJyxcbiAgICAgIGlucHV0UG9zaXRpb246ICd0b3AnLFxuICAgICAgbGFuZzogJ2VuJyxcbiAgICAgIGxhenlMb2FkaW5nOiBmYWxzZVxuICAgIH0pXG4gIF1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L2Rlc2lnbi13ZWIvdjIvdnVlcHJlc3Mtc3RhcnRlci9kb2NzLy52dWVwcmVzcy9jb25maWdzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxkZXNpZ24td2ViXFxcXHYyXFxcXHZ1ZXByZXNzLXN0YXJ0ZXJcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnc1xcXFxoZWFkLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9kZXNpZ24td2ViL3YyL3Z1ZXByZXNzLXN0YXJ0ZXIvZG9jcy8udnVlcHJlc3MvY29uZmlncy9oZWFkLnRzXCI7aW1wb3J0IHR5cGUgeyBIZWFkQ29uZmlnIH0gZnJvbSAnQHZ1ZXByZXNzL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBoZWFkOiBIZWFkQ29uZmlnW10gPSBbXG4gIFtcbiAgICAnbGluaycsXG4gICAge1xuICAgICAgcmVsOiAnaWNvbicsXG4gICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIHNpemVzOiAnMTZ4MTYnLFxuICAgICAgaHJlZjogYC9pbWFnZXMvaWNvbnMvZmF2aWNvbi0xNngxNi5wbmdgLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICAnbGluaycsXG4gICAge1xuICAgICAgcmVsOiAnaWNvbicsXG4gICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIHNpemVzOiAnMzJ4MzInLFxuICAgICAgaHJlZjogYC9pbWFnZXMvaWNvbnMvZmF2aWNvbi0zMngzMi5wbmdgLFxuICAgIH0sXG4gIF0sXG4gIFsnbGluaycsIHsgcmVsOiAnbWFuaWZlc3QnLCBocmVmOiAnL21hbmlmZXN0LndlYm1hbmlmZXN0JyB9XSxcbiAgWydtZXRhJywgeyBuYW1lOiAnYXBwbGljYXRpb24tbmFtZScsIGNvbnRlbnQ6ICdWdWVQcmVzcycgfV0sXG4gIFsnbWV0YScsIHsgbmFtZTogJ2FwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlJywgY29udGVudDogJ1Z1ZVByZXNzJyB9XSxcbiAgWydtZXRhJywgeyBuYW1lOiAnYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZScsIGNvbnRlbnQ6ICdibGFjaycgfV0sXG4gIFtcbiAgICAnbGluaycsXG4gICAgeyByZWw6ICdhcHBsZS10b3VjaC1pY29uJywgaHJlZjogYC9pbWFnZXMvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdgIH0sXG4gIF0sXG4gIFtcbiAgICAnbGluaycsXG4gICAge1xuICAgICAgcmVsOiAnbWFzay1pY29uJyxcbiAgICAgIGhyZWY6ICcvaW1hZ2VzL2ljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2ZycsXG4gICAgICBjb2xvcjogJyMzZWFmN2MnLFxuICAgIH0sXG4gIF0sXG4gIFsnbWV0YScsIHsgbmFtZTogJ21zYXBwbGljYXRpb24tVGlsZUNvbG9yJywgY29udGVudDogJyMzZWFmN2MnIH1dLFxuICBbJ21ldGEnLCB7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6ICcjM2VhZjdjJyB9XSxcbl1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovZGVzaWduLXdlYi92Mi92dWVwcmVzcy1zdGFydGVyL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxkZXNpZ24td2ViXFxcXHYyXFxcXHZ1ZXByZXNzLXN0YXJ0ZXJcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnc1xcXFxuYXZiYXJcXFxcdmkudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2Rlc2lnbi13ZWIvdjIvdnVlcHJlc3Mtc3RhcnRlci9kb2NzLy52dWVwcmVzcy9jb25maWdzL25hdmJhci92aS50c1wiO2ltcG9ydCB0eXBlIHsgTmF2YmFyQ29uZmlnIH0gZnJvbSAnQHZ1ZXByZXNzL3RoZW1lLWRlZmF1bHQnXG5cbmV4cG9ydCBjb25zdCBuYXZiYXJWaTogTmF2YmFyQ29uZmlnID0gW1xuICB7IHRleHQ6ICdUcmFuZyBDaFx1MUVFNycsIGxpbms6ICcvJyB9LFxuICB7IHRleHQ6ICdHaVx1MUVEQmkgdGhpXHUxRUM3dScsIGxpbms6ICcvZ3VpZGUvaW50cm8ubWQnIH0sXG5cbiAge1xuICAgIHRleHQ6ICcyRCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1Bob3Rvc2hvcCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnQWRvYmUgUGhvdG9zaG9wJywgbGluazogJy9waG90b3Nob3AvaW50cm8ubWQnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnVGluIEhcdTFFQ0RjJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6ICdOXHUxRUMxbiBUXHUxRUEzbmcgQ05UVCcsIGxpbms6ICcvbmhhcG1vbi9DVDIwMC1OZW5fdGFuZ19jb25nX25naGVfdGhvbmdfdGluLycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcblxuICB7XG4gICAgdGV4dDogJzNEJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnUGhvdG9zaG9wJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6ICdBZG9iZSBQaG90b3Nob3AnLCBsaW5rOiAnL3Bob3Rvc2hvcC8nIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnVGluIEhcdTFFQ0RjJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6ICdOXHUxRUMxbiBUXHUxRUEzbmcgQ05UVCcsIGxpbms6ICcvbmhhcG1vbi9DVDIwMC1OZW5fdGFuZ19jb25nX25naGVfdGhvbmdfdGluLycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcblxuICB7XG4gICAgdGV4dDogJ0xcdTAwRTBtIHBoaW0nLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdQaG90b3Nob3AnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogJ0Fkb2JlIFBob3Rvc2hvcCcsIGxpbms6ICcvcGhvdG9zaG9wLycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdUaW4gSFx1MUVDRGMnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogJ05cdTFFQzFuIFRcdTFFQTNuZyBDTlRUJywgbGluazogJy9uaGFwbW9uL0NUMjAwLU5lbl90YW5nX2NvbmdfbmdoZV90aG9uZ190aW4vJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXG5dXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L2Rlc2lnbi13ZWIvdjIvdnVlcHJlc3Mtc3RhcnRlci9kb2NzLy52dWVwcmVzcy9jb25maWdzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGRlc2lnbi13ZWJcXFxcdjJcXFxcdnVlcHJlc3Mtc3RhcnRlclxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWdzXFxcXHNpZGViYXJcXFxcdmkudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2Rlc2lnbi13ZWIvdjIvdnVlcHJlc3Mtc3RhcnRlci9kb2NzLy52dWVwcmVzcy9jb25maWdzL3NpZGViYXIvdmkudHNcIjtpbXBvcnQgdHlwZSB7IFNpZGViYXJDb25maWcgfSBmcm9tICdAdnVlcHJlc3MvdGhlbWUtZGVmYXVsdCdcblxuZXhwb3J0IGNvbnN0IHNpZGViYXJWaTogU2lkZWJhckNvbmZpZyA9IHtcbiAgLy8hIC0tLS0tQmVnaW46IEd1aWRlXG4gICcvZ3VpZGUvJzogW1xuICAgICcvZ3VpZGUvaW50cm8ubWQnLFxuICAgICcvZ3VpZGUvZGVzYy5tZCcsXG4gICAgJy9ndWlkZS90dXRvcmlhbC5tZCcsXG4gICAgJy9ndWlkZS9jb250cmlidXRpb24ubWQnLFxuICAgICcvZ3VpZGUvc291cmNlLm1kJyxcbiAgXSxcblxuICAnL3Bob3Rvc2hvcC8nOiBbXG4gICAgJy9waG90b3Nob3AvaW50cm8ubWQnLFxuICAgICcvcGhvdG9zaG9wL2luc3RhbGwubWQnXG4gIF1cblxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVCxTQUFTLG9CQUFvQjtBQUM1VixTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLG1CQUFtQjs7O0FDQXJCLElBQU0sT0FBcUI7QUFBQSxFQUNoQztBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsQ0FBQyxRQUFRLEVBQUUsS0FBSyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7QUFBQSxFQUMzRCxDQUFDLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixTQUFTLFdBQVcsQ0FBQztBQUFBLEVBQzFELENBQUMsUUFBUSxFQUFFLE1BQU0sOEJBQThCLFNBQVMsV0FBVyxDQUFDO0FB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
