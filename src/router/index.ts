import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PlayersView from "../views/PlayersView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "playersView",
    component: PlayersView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
