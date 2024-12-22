import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "麦田Blog",
  description: "麦田Blog,Blog,软件架构",

  theme,
});
