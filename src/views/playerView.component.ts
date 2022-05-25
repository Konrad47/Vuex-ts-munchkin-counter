import { IPlayer } from "@/model/player.model";
import Vue from "vue";
import Component from "vue-class-component";
import { Inject, Prop } from "vue-property-decorator";
import PlayersService from "./players.service";

@Component
export default class PlayerView extends Vue {
  @Prop({ default: "id" })
  id!: number;

  @Inject("playersService") private playersService!: () => PlayersService;

  get getPlayer() {
    return this.$store.getters.getPlayer;
  }
  created() {
    this.$store.dispatch("fetchPlayer", this.id);
  }

  public addLevel() {
    const player: IPlayer = {
      id: this.$store.getters.getPlayer.id,
      name: this.$store.getters.getPlayer.name,
      sex: this.$store.getters.getPlayer.sex,
      items: this.$store.getters.getPlayer.items,
      level: this.$store.getters.getPlayer.level + 1,
    };
    this.$store.commit("addLevel");
    this.playersService().editPlayer(player, this.$store.getters.getPlayer.id);
  }
  public removeLevel() {
    const player: IPlayer = {
      id: this.$store.getters.getPlayer.id,
      name: this.$store.getters.getPlayer.name,
      sex: this.$store.getters.getPlayer.sex,
      items: this.$store.getters.getPlayer.items,
      level: this.$store.getters.getPlayer.level - 1,
    };
    this.$store.commit("removeLevel");
    this.playersService().editPlayer(player, this.$store.getters.getPlayer.id);
  }
  public addItems() {
    const player: IPlayer = {
      id: this.$store.getters.getPlayer.id,
      name: this.$store.getters.getPlayer.name,
      sex: this.$store.getters.getPlayer.sex,
      items: this.$store.getters.getPlayer.items + 1,
      level: this.$store.getters.getPlayer.level,
    };
    this.$store.commit("addItems");
    this.playersService().editPlayer(player, this.$store.getters.getPlayer.id);
  }
  public removeItems() {
    const player: IPlayer = {
      id: this.$store.getters.getPlayer.id,
      name: this.$store.getters.getPlayer.name,
      sex: this.$store.getters.getPlayer.sex,
      items: this.$store.getters.getPlayer.items - 1,
      level: this.$store.getters.getPlayer.level,
    };
    this.$store.commit("removeItems");
    this.playersService().editPlayer(player, this.$store.getters.getPlayer.id);
  }
  public changeSex() {
    const player: IPlayer = {
      id: this.$store.getters.getPlayer.id,
      name: this.$store.getters.getPlayer.name,
      sex: !this.$store.getters.getPlayer.sex,
      items: this.$store.getters.getPlayer.items,
      level: this.$store.getters.getPlayer.level,
    };
    this.$store.commit("changeSex");
    this.playersService().editPlayer(player, this.$store.getters.getPlayer.id);
  }
}
