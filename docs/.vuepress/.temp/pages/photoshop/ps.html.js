import comp from "E:/design-web/v2/vuepress-starter/docs/.vuepress/.temp/pages/photoshop/ps.html.vue"
const data = JSON.parse("{\"path\":\"/photoshop/ps.html\",\"title\":\"PHOSTOHOP\",\"lang\":\"vi\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"photoshop/ps.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
