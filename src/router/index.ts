import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PlayersView from "../views/PlayersView.vue";
import PlayerView from "../views/PlayerView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "playersView",
    component: PlayersView,
  },
  {
    path: "/player/:id",
    name: "playerView",
    component: PlayerView,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
