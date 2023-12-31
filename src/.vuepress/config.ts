// import { searchProPlugin } from "vuepress-plugin-search-pro";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Alexa-Blog",
      description: "Blog to document life",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Alexa的博客",
      description: "博客记录生活",
    },
  },

  head: [
    [
      "link", {
        rel: "shortcut icon",
        // href: "/favicon.ico",
        href: "/logo_black.png",
      }
    ],],

  theme,
  // plugins: [
  //   searchProPlugin({
  //     // 索引全部内容
  //     indexContent: true,
  //     // 为分类和标签添加索引
  //     customFields: [
  //       {
  //         getter: (page) => page.frontmatter.category,
  //         formatter: "分类：$content",
  //       },
  //       {
  //         getter: (page) => page.frontmatter.tag,
  //         formatter: "标签：$content",
  //       },
  //     ],
  //   }),
  // ],
  
  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    }
  }

  // Enable it with pwa
  // shouldPrefetch: false,
});
