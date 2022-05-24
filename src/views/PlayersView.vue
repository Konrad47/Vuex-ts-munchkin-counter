<template>
  <div>
    <div id="players" v-for="(player, i) in getPlayers" :key="i">
      <router-link
        :to="{
          name: 'playerView',
          params: { id: getPlayers[i].id },
        }"
      >
        <b-card
          header-bg-variant="dark"
          header-text-variant="white"
          border-variant="secondary"
          :header="getPlayers[i].name"
          header-tag="header"
        >
          <b-card-text>
            <h2>Level: {{ getPlayers[i].level }}</h2>
            <h2>Strenght: {{ getPlayers[i].items + getPlayers[i].level }}</h2>
            <b-icon
              v-if="getPlayers[i].sex"
              scale="2"
              icon="gender-male"
            ></b-icon>
            <b-icon v-else scale="2" icon="gender-female"></b-icon>
          </b-card-text>
        </b-card>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./playersView.component.ts">
</script>

<style scoped>
#players {
  display: inline-block;
  margin: 10px;
  width: 200px;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
a:hover {
  color: #2c3e50;
  font-weight: bold;
}
</style>