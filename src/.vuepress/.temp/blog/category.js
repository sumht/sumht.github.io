export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"报表":{"path":"/category/%E6%8A%A5%E8%A1%A8/","indexes":[0]},"架构方案":{"path":"/category/%E6%9E%B6%E6%9E%84%E6%96%B9%E6%A1%88/","indexes":[0]}}}},"tag":{"/":{"path":"/tag/","map":{}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

