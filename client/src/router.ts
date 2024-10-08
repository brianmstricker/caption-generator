import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";

const routes = [
 {
  path: "/",
  name: "Home",
  component: HomeView,
 },
 {
  path: "/about",
  name: "About",
  component: () => import("./views/AboutView.vue"),
 },
 {
  path: "/demo",
  name: "Demo",
  component: () => import("./views/DemoView.vue"),
 },
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

export default router;
