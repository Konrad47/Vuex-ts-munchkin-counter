import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "http://localhost:5001/players";

export default new Vuex.Store({
  state: {
    players: [],
    player: {
      id: 1,
      name: "",
      sex: false,
      items: 0,
      level: 1,
    },
  },
  getters: {
    getPlayers: (state) => state.players,
    getPlayer: (state) => state.player,
  },
  mutations: {
    setPlayers: (state, players) => (state.players = players),
    setPlayer: (state, player) => (state.player = player),
    addLevel: (state) => state.player.level++,
    removeLevel: (state) => state.player.level--,
    addItems: (state) => state.player.items++,
    removeItems: (state) => state.player.items--,
    changeSex: (state) => (state.player.sex = !state.player.sex),
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
