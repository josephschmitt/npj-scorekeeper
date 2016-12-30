<template lang="html">
  <div>
    <ul class="topcoat-list topcoat-list__container">
      <li class="topcoat-list__item" v-for="player in players()">{{player.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: mapState({
      allPlayers: function(state) {
	return state.players;
      }
    }),
  }
</script>

<style lang="css">
</style>
