import { defineConfig } from "vitepress";
import { nav } from "./nav";
import { sidebar } from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/literature/",
  lang: "en-US",
  title: "文学之路",
  description: "读万卷书，行万里路",
  lastUpdated: true,
  cleanUrls: true,
  // 忽略死链
  ignoreDeadLinks: true,
  //暗黑模式
  appearance: "dark",
  //主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: "deep",
    outlineTitle: "目录",
    lastUpdatedText: "更新时间",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    nav: nav,
    sidebar: sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/Yeshan-Taoist/literature" },
    ],
    editLink: {
      pattern: "https://github.com/Yeshan-Taoist/literature",
      text: "在 GitHub 上编辑本章内容",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Yeshan Taoist",
    },
    search: {
      provider: "local",
    },
  },
  //其他
});
