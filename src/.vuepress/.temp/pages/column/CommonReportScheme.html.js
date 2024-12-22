import comp from "D:/codes/note/blog/src/.vuepress/.temp/pages/column/CommonReportScheme.html.vue"
const data = JSON.parse("{\"path\":\"/column/CommonReportScheme.html\",\"title\":\"常见报表方案\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"常见报表方案\",\"date\":\"2023-10-21T20:54:03.000Z\",\"sidebar\":true,\"author\":\"sumht\",\"gitInclude\":[],\"description\":\"常见的 BI 和报表的需求有哪些？ BI：商业洞见或者分析，BI 肯定有报表的一部分，会提供一些预测模型和分析模型。一般来说都是数据团队来实现，实时性不高，往往是 T+1。简单来说，偏向于图表渲染。 报表：现有数据呈现，分为实时数据（从库）、准实时数据（流处理平台）、离线 T+1 报表。简单来说，偏向于数据统计、查询、导出和分析。 常见的报表类型有哪些...\"},\"headers\":[{\"level\":2,\"title\":\"常见的 BI 和报表的需求有哪些？\",\"slug\":\"常见的-bi-和报表的需求有哪些\",\"link\":\"#常见的-bi-和报表的需求有哪些\",\"children\":[]},{\"level\":2,\"title\":\"常见的报表类型有哪些？\",\"slug\":\"常见的报表类型有哪些\",\"link\":\"#常见的报表类型有哪些\",\"children\":[]},{\"level\":2,\"title\":\"常见的技术选型有那些？\",\"slug\":\"常见的技术选型有那些\",\"link\":\"#常见的技术选型有那些\",\"children\":[]},{\"level\":2,\"title\":\"常见的场景的最佳的技术选型？\",\"slug\":\"常见的场景的最佳的技术选型\",\"link\":\"#常见的场景的最佳的技术选型\",\"children\":[{\"level\":3,\"title\":\"普通的列表报表导出\",\"slug\":\"普通的列表报表导出\",\"link\":\"#普通的列表报表导出\",\"children\":[]},{\"level\":3,\"title\":\"详情的 Excel 异型表单导出\",\"slug\":\"详情的-excel-异型表单导出\",\"link\":\"#详情的-excel-异型表单导出\",\"children\":[]},{\"level\":3,\"title\":\"非线性报表（多源分片）\",\"slug\":\"非线性报表-多源分片\",\"link\":\"#非线性报表-多源分片\",\"children\":[]},{\"level\":3,\"title\":\"复杂的数据源和拖拽定制化开发\",\"slug\":\"复杂的数据源和拖拽定制化开发\",\"link\":\"#复杂的数据源和拖拽定制化开发\",\"children\":[]}]},{\"level\":2,\"title\":\"常见的反模式有那些？\",\"slug\":\"常见的反模式有那些\",\"link\":\"#常见的反模式有那些\",\"children\":[]},{\"level\":2,\"title\":\"读写分离策略\",\"slug\":\"读写分离策略\",\"link\":\"#读写分离策略\",\"children\":[]},{\"level\":2,\"title\":\"参考资料\",\"slug\":\"参考资料\",\"link\":\"#参考资料\",\"children\":[]},{\"level\":2,\"title\":\"录屏\",\"slug\":\"录屏\",\"link\":\"#录屏\",\"children\":[]}],\"readingTime\":{\"minutes\":2.56,\"words\":768},\"filePathRelative\":\"column/CommonReportScheme.md\",\"localizedDate\":\"2023年10月22日\",\"excerpt\":\"<h2>常见的 BI 和报表的需求有哪些？</h2>\\n<ul>\\n<li>BI：商业洞见或者分析，BI 肯定有报表的一部分，会提供一些预测模型和分析模型。一般来说都是数据团队来实现，实时性不高，往往是 T+1。简单来说，偏向于图表渲染。</li>\\n<li>报表：现有数据呈现，分为实时数据（从库）、准实时数据（流处理平台）、离线 T+1 报表。简单来说，偏向于数据统计、查询、导出和分析。</li>\\n</ul>\\n<h2>常见的报表类型有哪些？</h2>\\n<ul>\\n<li>BI 报表（OLAP）\\n<ul>\\n<li>图表报表</li>\\n<li>分组统计报表（维度数据）</li>\\n<li>交互报表（自定义组合分析）</li>\\n<li>智能预测报表（销量和库存预测）</li>\\n<li>画像分析</li>\\n</ul>\\n</li>\\n<li>普通离线统计报表（OLAP）\\n<ul>\\n<li>从库、数仓、T+1 报表</li>\\n</ul>\\n</li>\\n<li>应用内实时报表（OLTP）\\n<ul>\\n<li>导出报表</li>\\n<li>套打报表（制式表格、word）</li>\\n<li>清单列表（非常复杂的组合查询）</li>\\n<li>普通统计报表</li>\\n</ul>\\n</li>\\n<li>驾驶舱大屏（OLAP+OLTP）\\n<ul>\\n<li>数据应用和普通应用混合体</li>\\n</ul>\\n</li>\\n</ul>\",\"autoDesc\":true}")
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
