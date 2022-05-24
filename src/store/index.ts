import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const url = "http://localhost:5001/players";

export default new Vuex.Store({
  state: {
    players: [],
    player: {},
  },
  getters: {
    getPlayers: (state) => state.players,
    getPlayer: (state) => state.player,
  },
  mutations: {
    setPlayers: (state, players) => (state.players = players),
    setPlayer: (state, player) => (state.player = player),
  },
  actions: {
    async fetchPlayers({ commit }) {
      try {
        const response = await axios.get(`${url}`);
        commit("setPlayers", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchPlayer({ commit }, id) {
      try {
        const response = await axios.get(`${url}?id=${id}`);
        commit("setPlayer", response.data[0]);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
