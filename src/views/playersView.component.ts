import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class PlayersView extends Vue {
  get getPlayers() {
    return this.$store.getters.getPlayers;
  }
  created() {
    this.$store.dispatch("fetchPlayers");
  }
}
