import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "http://localhost:5001/players";

export default new Vuex.Store({
  state: {
    players: {},
  },
  getters: {
    getPlayers: (state) => state.players,
  },
  mutations: {
    setPlayers: (state, players) => (state.players = players),
  },
  actions: {
    async fetchPlayers({ commit }) {
      const response = await axios.get(`${url}`);
      commit("setPlayers", response.data);
    },
  },
});
