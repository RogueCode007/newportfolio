import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import Projects from "@/views/Projects.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
  ],
});

export default router;
