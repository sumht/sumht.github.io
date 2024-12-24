import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/blog": [
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "博客",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
  ],
  "column": [
    {
      text: "专题",
      icon: "book",
      prefix: "agile-team/",
      children: "structure",
    },
  ],
});
