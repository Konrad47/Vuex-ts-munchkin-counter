import { IPlayer } from "@/model/player.model";
import Vue from "vue";
import Component from "vue-class-component";
import { Inject, Ref } from "vue-property-decorator";
import PlayersService from "./players.service";

@Component
export default class PlayersView extends Vue {
  @Inject("playersService") private playersService!: () => PlayersService;
  get getPlayers() {
    return this.$store.getters.getPlayers;
  }
  created() {
    this.$store.dispatch("fetchPlayers");
  }

  public player: IPlayer = {
    id: Math.floor(Math.random() * 100),
    name: "",
    sex: true,
    items: 0,
    level: 1,
  };

  @Ref("my-modal") myModal: any;

  public addPlayer() {
    if (this.player.name != "") {
      this.playersService().addPlayer(this.player);
      this.getPlayers.push(this.player);
      this.myModal.hide();
    } else {
      alert("Name cannot be empty");
    }
  }

  showModal() {
    this.myModal.show();
  }

  hideModal() {
    this.myModal.hide();
  }
}
