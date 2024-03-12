export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"E:/design-web/v2/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/design-web/v2/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/design-web/v2/vuepress-starter/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"Giới thiệu dự án"} }],
  ["/guide/contribution.html", { loader: () => import(/* webpackChunkName: "contribution.html" */"E:/design-web/v2/vuepress-starter/docs/.vuepress/.temp/pages/guide/contribution.html.js"), meta: {"title":"Xây dựng WebSite"} }],
  ["/guide/desc.html", { loader: () => import(/* webpackChunkName: "desc.html" */"E:/design-web/v2/vuepress-starter/docs/.vuepress/.temp/pages/guide/desc.html.js"), meta: {"title":"Mô tả dự án"} }],
  ["/guide/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"E:/design-web/v2/vuepress-starter/docs/.vuepress/.temp/pages/guide/intro.html.js"), meta: {"title":"Giới thiệu"} }],
  ["/guide/source.html", { loader: () => import(/* webpackChunkName: "source.html" */"E:/design-web/v2/vuepress-starter/docs/.vuepress/.temp/pages/guide/source.html.js"), meta: {"title":"Các dự án khác"} }],
  ["/guide/tutorial.html", { loader: () => import(/* webpackChunkName: "tutorial.html" */"E:/design-web/v2/vuepress-starter/docs/.vuepress/.temp/pages/guide/tutorial.html.js"), meta: {"title":"Hướng dẫn sử dụng"} }],
  ["/photoshop/install.html", { loader: () => import(/* webpackChunkName: "install.html" */"E:/design-web/v2/vuepress-starter/docs/.vuepress/.temp/pages/photoshop/install.html.js"), meta: {"title":"Cài đặt"} }],
  ["/photoshop/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"E:/design-web/v2/vuepress-starter/docs/.vuepress/.temp/pages/photoshop/intro.html.js"), meta: {"title":"Giới thiệu"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/design-web/v2/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
