import type { DefaultTheme } from "vitepress";
import { ClassicTimes } from "./sidebar/ClassicTimes";
import { EssayThoughts } from "./sidebar/EssayThoughts";
import { ModernTimes } from "./sidebar/ModernTimes";
import { RecentTimes } from "./sidebar/RecentTimes";
export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "前言",
    collapsed: false,
    items: [{ text: "序章", link: "/" }],
  },
  {
    text: "古典文学",
    collapsed: true,
    items: ClassicTimes,
  },
  {
    text: "近代文学",
    collapsed: true,
    items: ModernTimes,
  },
  {
    text: "现代文学",
    collapsed: true,
    items: RecentTimes,
  },
  {
    text: "随笔感想",
    collapsed: true,
    items: EssayThoughts,
  },
];
