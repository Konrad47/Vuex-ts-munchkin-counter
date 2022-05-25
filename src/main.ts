import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue, { IconsPlugin } from "bootstrap-vue";
import PlayersService from "./views/players.service";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  provide: {
    playersService: () => new PlayersService(),
  },
  store,
  render: (h) => h(App),
}).$mount("#app");
