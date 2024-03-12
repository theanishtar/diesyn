import comp from "E:/design-web/v2/vuepress-starter/docs/.vuepress/.temp/pages/ps/index.html.vue"
const data = JSON.parse("{\"path\":\"/ps/\",\"title\":\"HI\",\"lang\":\"vi\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"ps/README.md\"}")
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
