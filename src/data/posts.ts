import type { PostInfo } from "../type";

export const posts: PostInfo[] = [
  {
    id: 1,
    title: "記事タイトル１",
    thumbnailUrl: "https://placehold.jp/800x400.png",
    createdAt: "2023-09-11T09:00:00.000Z",
    categories: ["React", "TypeScript"],
    content: `本文です。本文です。本文です。本文です。本文です。本文です。\n本文です。本文です。本文です。本文です。本文です。\n\n本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。\n\n\n本文です。本文です。本文です。本文です。本文です。本文です。\n`,
  },
  {
    id: 2,
    title: "記事タイトル２",
    thumbnailUrl: "https://placehold.jp/800x400.png",
    createdAt: "2023-09-10T09:00:00.000Z",
    categories: ["HTML", "CSS"],
    content: `本文です。本文です。本文です。本文です。本文です。本文です。\n本文です。本文です。本文です。本文です。本文です。\n\n本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。\n\n\n本文です。本文です。本文です。本文です。本文です。本文です。\n`,
  },
  {
    id: 3,
    title: "記事タイトル３",
    thumbnailUrl: "https://placehold.jp/800x400.png",
    createdAt: "2023-09-09T09:00:00.000Z",
    categories: ["JavaScript"],
    content: `本文です。本文です。本文です。本文です。本文です。本文です。\n本文です。本文です。本文です。本文です。本文です。\n\n本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。\n\n\n本文です。本文です。本文です。本文です。本文です。本文です。\n`,
  },
];
