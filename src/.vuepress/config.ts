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

  // Enable it with pwa
  // shouldPrefetch: false,
});
