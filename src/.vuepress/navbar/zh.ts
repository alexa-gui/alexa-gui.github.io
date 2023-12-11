import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/", //链接 直接代表src开始 存储文章
  {text: "简介", icon:"book", link:"/intro"},

  {
    text: "编程",
    icon: "computer",
    children: [ //设置子分集
      {text: "Python", icon: "code", link: ""},
      {text: "网站设计", icon: "code", link: ""},
      {text: "数据分析", icon: "code", link: ""},
    ]

  },

  {
    text: "工程",
    icon: "hammer",
    children: [ //设置子分集
      {text: "CAD", icon: "computer", link: ""},
      {text: "机械", icon: "car", link: ""},
      {text: "结构", icon: "bridge", link: ""},
      {text: "电子", icon: "lightbulb", link: ""},
      {text: "数学", icon: "calculator", link: ""},
    ]

  },

  {
    text: "项目",
    icon: "bolt",
    children: [ //设置子分集
      {text: "aaa", icon: "code", link: ""},
      {text: "bbb", icon: "code", link: ""},
      {text: "ccc", icon: "code", link: ""},
    ]

  },

]);
