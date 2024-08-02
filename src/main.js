import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./components/HomeView.vue";
import DetailView from "./components/DetailView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/detail", component: DetailView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth", // Smooth scrolling
      };
    }
    return savedPosition || { top: 0 };
  },
});

createApp(App).use(router).mount("#app");
