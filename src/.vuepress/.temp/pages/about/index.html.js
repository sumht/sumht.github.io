import comp from "D:/codes/note/blog/src/.vuepress/.temp/pages/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/\",\"title\":\"关于我\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"关于我\",\"date\":\"2023-10-21T20:54:03.000Z\",\"author\":\"sumht\",\"article\":false,\"gitInclude\":[],\"description\":\"关于我 一名普通的程序员，现在主要做一些软件架构、咨询的工作，擅长 Java 中间件开发、DDD和微服务等设计方法。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/about/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"麦田Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"关于我\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"关于我 一名普通的程序员，现在主要做一些软件架构、咨询的工作，擅长 Java 中间件开发、DDD和微服务等设计方法。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"sumht\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-10-21T20:54:03.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"关于我\\\",\\\"description\\\":\\\"关于我 一名普通的程序员，现在主要做一些软件架构、咨询的工作，擅长 Java 中间件开发、DDD和微服务等设计方法。\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.2,\"words\":60},\"filePathRelative\":\"about/readme.md\",\"localizedDate\":\"2023年10月22日\",\"excerpt\":\"\\n<p>一名普通的程序员，现在主要做一些软件架构、咨询的工作，擅长 Java 中间件开发、DDD和微服务等设计方法。</p>\\n\",\"autoDesc\":true}")
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
