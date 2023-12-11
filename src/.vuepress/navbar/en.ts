import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/", //链接 直接代表src开始 存储文章
  {text: "Intro", icon:"book", link:"/intro"},

  {
    text: "Coding",
    icon: "computer",
    children: [ //设置子分集
      {text: "Python", icon: "code", link: ""},
      {text: "Web Design", icon: "code", link: ""},
      {text: "Data Analytics", icon: "code", link: ""},
    ]

  },

  {
    text: "Engineering",
    icon: "hammer",
    children: [ //设置子分集
      {text: "CAD", icon: "computer", link: ""},
      {text: "Mechanics", icon: "car", link: ""},
      {text: "Structures", icon: "bridge", link: ""},
      {text: "Electrical", icon: "lightbulb", link: ""},
      {text: "Math", icon: "calculator", link: ""},
    ]

  },

  {
    text: "Projects",
    icon: "bolt",
    children: [ //设置子分集
      {text: "aaa", icon: "code", link: ""},
      {text: "bbb", icon: "code", link: ""},
      {text: "ccc", icon: "code", link: ""},
    ]

  },

]);
