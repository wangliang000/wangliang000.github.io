import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "Home" },
    { path: "/article", component: "Article" },
    { path: "/todo", component: "TODO" },
  ],
  npmClient: 'yarn',
});
