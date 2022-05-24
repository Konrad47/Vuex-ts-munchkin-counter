<template>
  <div id="player">
    <b-card
      header-bg-variant="dark"
      header-text-variant="white"
      border-variant="secondary"
      :header="getPlayer.name"
      header-tag="header"
    >
      <b-card-text>
        <h2>
          Level: {{ getPlayer.level }} <b-icon icon="file-plus"></b-icon
          ><b-icon icon="file-minus"></b-icon>
        </h2>
        <h2>
          Items: {{ getPlayer.items }} <b-icon icon="file-plus"></b-icon
          ><b-icon icon="file-minus"></b-icon>
        </h2>
        <button>
          <b-icon v-if="getPlayer.sex" scale="2" icon="gender-male"></b-icon>
          <b-icon v-else scale="2" icon="gender-female"></b-icon>
        </button>
      </b-card-text>
    </b-card>
  </div>
</template>

<script lang="ts" src="./playerView.component.ts">
</script>

<style scoped>
#player {
  display: inline-block;
  margin: 10px;
  width: 250px;
}
button {
  border: none;
  color: #2c3e50;
  background: white;
}
</style>