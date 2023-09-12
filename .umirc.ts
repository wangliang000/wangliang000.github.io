import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "Home" },
    { path: "/article", component: "Article" },
  ],
  npmClient: 'yarn',
});
