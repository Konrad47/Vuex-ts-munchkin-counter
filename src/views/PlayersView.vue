<template>
  <div>
    <b-button @click="showModal" variant="dark" size="lg" class="mb-2">
      <b-icon icon="plus-square" aria-hidden="true"></b-icon> Add Player
    </b-button>
    <b-modal ref="my-modal" hide-header hide-footer>
      <div class="d-block text-center">
        <b-form-group label="Name" label-for="name-input"></b-form-group>
        <b-form-input v-model="player.name" id="name-input"></b-form-input>
        <button id="sex" @click="player.sex = !player.sex">
          <b-icon v-if="player.sex" scale="2" icon="gender-male"></b-icon>
          <b-icon v-else scale="2" icon="gender-female"></b-icon>
        </button>
      </div>
      <b-button @click="addPlayer()" class="mt-3" variant="dark" block
        >Add Player</b-button
      >
      <b-button @click="hideModal()" class="mt-3" variant="dark" block
        >Close</b-button
      >
    </b-modal>
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
        <b-icon
          @click="deletePlayer(getPlayers[i].id)"
          scale="1"
          icon="x-square"
        ></b-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./playersView.component.ts">
</script>

<style scoped>
#players {
  display: inline-block;
  margin: 10px;
  width: 250px;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
a:hover {
  color: #2c3e50;
  font-weight: bold;
}
button {
  margin: 5px;
}
#sex {
  border: none;
  color: #2c3e50;
  background: white;
  margin: 10px;
}
</style>