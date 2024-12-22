export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/codes/note/blog/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"博客主页","i":"home"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"D:/codes/note/blog/src/.vuepress/.temp/pages/about/index.html.js"), meta: {"t":"关于我"} }],
  ["/posts/report/CommonReportScheme.html", { loader: () => import(/* webpackChunkName: "posts_report_CommonReportScheme.html" */"D:/codes/note/blog/src/.vuepress/.temp/pages/posts/report/CommonReportScheme.html.js"), meta: {"a":"sumht","d":1697921643000,"l":"2023年10月22日","c":["报表","架构方案"],"e":"\n<h2>常见的 BI 和报表的需求有哪些？</h2>\n<ul>\n<li>BI：商业洞见或者分析，BI 肯定有报表的一部分，会提供一些预测模型和分析模型。一般来说都是数据团队来实现，实时性不高，往往是 T+1。简单来说，偏向于图表渲染。</li>\n<li>报表：现有数据呈现，分为实时数据（从库）、准实时数据（流处理平台）、离线 T+1 报表。简单来说，偏向于数据统计、查询、导出和分析。</li>\n</ul>\n<h2>常见的报表类型有哪些？</h2>\n<ul>\n<li>BI 报表（OLAP）\n<ul>\n<li>图表报表</li>\n<li>分组统计报表（维度数据）</li>\n<li>交互报表（自定义组合分析）</li>\n<li>智能预测报表（销量和库存预测）</li>\n<li>画像分析</li>\n</ul>\n</li>\n<li>普通离线统计报表（OLAP）\n<ul>\n<li>从库、数仓、T+1 报表</li>\n</ul>\n</li>\n<li>应用内实时报表（OLTP）\n<ul>\n<li>导出报表</li>\n<li>套打报表（制式表格、word）</li>\n<li>清单列表（非常复杂的组合查询）</li>\n<li>普通统计报表</li>\n</ul>\n</li>\n<li>驾驶舱大屏（OLAP+OLTP）\n<ul>\n<li>数据应用和普通应用混合体</li>\n</ul>\n</li>\n</ul>","r":{"minutes":2.6,"words":779},"t":"常见报表方案","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/codes/note/blog/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/posts/report/", { loader: () => import(/* webpackChunkName: "posts_report_index.html" */"D:/codes/note/blog/src/.vuepress/.temp/pages/posts/report/index.html.js"), meta: {"t":"Report"} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"D:/codes/note/blog/src/.vuepress/.temp/pages/posts/index.html.js"), meta: {"t":"Posts"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/codes/note/blog/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/%E6%8A%A5%E8%A1%A8/", { loader: () => import(/* webpackChunkName: "category_报表_index.html" */"D:/codes/note/blog/src/.vuepress/.temp/pages/category/报表/index.html.js"), meta: {"t":"报表 分类","I":false} }],
  ["/category/%E6%9E%B6%E6%9E%84%E6%96%B9%E6%A1%88/", { loader: () => import(/* webpackChunkName: "category_架构方案_index.html" */"D:/codes/note/blog/src/.vuepress/.temp/pages/category/架构方案/index.html.js"), meta: {"t":"架构方案 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/codes/note/blog/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/codes/note/blog/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"D:/codes/note/blog/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/codes/note/blog/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
