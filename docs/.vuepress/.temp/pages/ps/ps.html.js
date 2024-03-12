import comp from "E:/design-web/v2/vuepress-starter/docs/.vuepress/.temp/pages/ps/ps.html.vue"
const data = JSON.parse("{\"path\":\"/ps/ps.html\",\"title\":\"PHOSTOHOP\",\"lang\":\"vi\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"ps/ps.md\"}")
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
