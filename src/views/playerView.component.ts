import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class PlayerView extends Vue {
  @Prop({ default: "id" })
  id!: number;

  get getPlayer() {
    return this.$store.getters.getPlayer;
  }
  created() {
    this.$store.dispatch("fetchPlayer", this.id);
  }
}
