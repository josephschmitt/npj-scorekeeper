<template lang="html">
  <div>
    <input class="topcoat-search-input full" type="search" value="" placeholder="Filter players" v-model="search">
    <ul class="topcoat-list topcoat-list__container">
      <li class="topcoat-list__item" v-for="player in players()">{{player.name}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    data() {
      return {
        search: ''
      };
    },
    computed: mapState({
      allPlayers: function(state) {
        return state.players;
      }
    }),
    methods: {
      players: function() {
        return this.allPlayers.filter((player) => {
          return player.name.toLowerCase().includes(this.search.toLowerCase());
        });
      }
    }
  }
</script>

<style lang="css">
  .topcoat-search-input {
    margin: 0.5rem 0.75rem;
    width: calc(100% - 0.75rem * 2);
  }
</style>
