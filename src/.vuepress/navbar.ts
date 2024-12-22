import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    link: "/posts/",
  },
  {
    text: "专题",
    icon: "book",
    link: "/column/",
  },
  {
    text: "关于我",
    icon: "user",
    link: "/about/",
  },
]);
