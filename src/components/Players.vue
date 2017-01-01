<template lang="html">
  <div>
    <navigation-bar>
      <button class="topcoat-button--cta" slot="navigation-bar-button-left" @click="editPlayers">
        <span v-if="!editMode">Edit</span>
        <span v-else="">Done</span>
      </button>
      <button class="topcoat-button--cta" slot="navigation-bar-button-right" @click="addNewPlayer">
        New
      </button>
    </navigation-bar>
    <input class="player-search-field topcoat-search-input full" type="search" placeholder="Filter players"
        v-model="search">
    <ul class="topcoat-list topcoat-list__container">
      <li class="player-list__item topcoat-list__item" v-for="player in players()">
        <span>{{player.name}}</span>
        <button class="topcoat-button" v-if="editMode" @click="deletePlayer(player)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import NavigationBar from './NavigationBar.vue';

  export default {
    components: {NavigationBar},
    data() {
      return {
        search: '',
        editMode: false
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
      },
      editPlayers: function () {
        this.editMode = !this.editMode;
      },
      addNewPlayer: function () {
        this.$router.push('/players/new/details');
      },
      deletePlayer: function (player) {
        this.$store.commit('deletePlayer', {player});
      }
    }
  }
</script>

<style lang="css">
  .player-search-field {
    margin: 0.5rem 0.75rem;
    width: calc(100% - 0.75rem * 2);
  }

  .player-list__item {
    display: flex;
    flex-direction: row;
  }

  .player-list__item .topcoat-button {
    margin-left: auto;
  }
</style>
