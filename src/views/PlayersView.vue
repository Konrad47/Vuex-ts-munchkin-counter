<template>
  <div>
    <b-card-group v-for="(player, i) in getPlayers" :key="i">
      <b-card
        header-bg-variant="dark"
        header-text-variant="white"
        border-variant="secondary"
        :header="getPlayers[i].name"
        header-tag="header"
        style="max-width: 20rem"
      >
        <b-card-text>
          <h2>Level: {{ getPlayers[i].level }}</h2>
          <h2>Items: {{ getPlayers[i].items }}</h2>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script lang="ts" src="./playersView.component.ts">
</script>

<style>
</style>