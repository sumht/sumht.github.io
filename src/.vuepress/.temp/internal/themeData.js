export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$r1zxC96/3Ege5QrYwgDyfeLuvE451m.WZ7b6/mA8x0hYhwUQHQFH6\"]}},\"author\":{\"name\":\"sumht\",\"url\":\"https://mister-hope.com\"},\"logo\":\"logo.png\",\"docsDir\":\"src\",\"blog\":{\"description\":\"一个后端开发者\",\"medias\":{\"Gitee\":\"https://gitee.com/sumht\",\"GitHub\":\"https://github.com/sumht\"}},\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\",\"print\":\"打印\"},\"blogLocales\":{\"article\":\"文章\",\"articleList\":\"文章列表\",\"category\":\"分类\",\"tag\":\"标签\",\"timeline\":\"时间轴\",\"timelineTitle\":\"昨日不在\",\"all\":\"全部\",\"intro\":\"个人介绍\",\"star\":\"星标\",\"empty\":\"$text 为空\"},\"paginationLocales\":{\"prev\":\"上一页\",\"next\":\"下一页\",\"navigate\":\"跳转到\",\"action\":\"前往\",\"errorText\":\"请输入 1 到 $page 之前的页码！\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\"},\"navbar\":[\"/\",{\"text\":\"博文\",\"icon\":\"pen-to-square\",\"link\":\"/posts/\"},{\"text\":\"专题\",\"icon\":\"book\",\"link\":\"/column/\"},{\"text\":\"关于我\",\"icon\":\"user\",\"link\":\"/about/\"}],\"sidebar\":{\"/blog\":[{\"text\":\"文章\",\"icon\":\"book\",\"prefix\":\"posts/\",\"children\":\"structure\"},{\"text\":\"博客\",\"icon\":\"laptop-code\",\"prefix\":\"demo/\",\"link\":\"demo/\",\"children\":\"structure\"}],\"column\":[{\"text\":\"专题\",\"icon\":\"book\",\"prefix\":\"agile-team/\",\"children\":[\"readme\",\"order\",\"title\",\"filename\"]}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
