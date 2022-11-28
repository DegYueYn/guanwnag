import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Item from "./views/Item.vue";
import Starter from "./views/Starter.vue";
import Download from "./views/Download.vue";
import  StartTheme from "./views/StartTheme.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter,
      },
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter,
      },
    },
    {
      path: "/item",
      name: "item",
      components: {
        header: AppHeader,
        default: Item,
        footer: AppFooter,
      },
    },
      {
      path: "/download",
      name: "download",
      components: {
        header: AppHeader,
        default: Download,
        footer: AppFooter,
      },
    },
    {
      path: "/login",
      name: "login",
      components: {
        default: Login,
      },
    },
    {
      path: "/register",
      name: "register",
      components: {
        default: Register,
      },
    },
     {
      path: "/starter",
      name: "starter",
      components: {
        header: AppHeader,
        default: Starter,
        footer: AppFooter,
      },
    },
        {
      path: "/startTheme",
      name: "startTheme",
      components: {
        header: AppHeader,
        default: StartTheme,
        footer: AppFooter,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
