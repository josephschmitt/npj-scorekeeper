<template lang="html">
  <div>
    <navigation-bar></navigation-bar>

    <div class="topcoat-list">
      <span class="topcoat-notification" v-if="hasErrors">{{errorMsg}}</span>
      <h3 class="topcoat-list__header">New Game</h3>
      <input type="text" class="topcoat-text-input full" placeholder="New Game Name" v-model="gameName">

      <template v-if="game.players.length">
        <h3 class="topcoat-list__header">Selected Players</h3>
        <ul class="topcoat-list__container">
          <li class="topcoat-list__item" v-for="player in game.players">
            <span class="item-title">{{player.name}}</span>
            <button class="topcoat-button" @click="removePlayer(player)">Remove</button>
          </li>
        </ul>
      </template>

      <template v-if="availablePlayers().length">
        <h3 class="topcoat-list__header">Available Players</h3>
        <ul class="topcoat-list__container">
          <li class="topcoat-list__item" v-for="player in availablePlayers()">
            <span class="item-title">{{player.name}}</span>
            <button class="topcoat-button" @click="addPlayer(player)">Add</button>
          </li>
        </ul>
      </template>
    </div>

    <button class="start-btn topcoat-button--cta full" @click="startGame()">Start Game</button>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import NavigationBar from './NavigationBar.vue';

  export default {
    data() {
      return {
        gameName: '',
        errorMsg: 'Name and at least one player required.',
        hasErrors: false,
        game: {
          name: '',
          players: []
        }
      };
    },
    components: {NavigationBar},
    computed: mapState({
      allPlayers: function (state) {
        return state.players;
      }
    }),
    methods: {
      availablePlayers: function () {
        return this.allPlayers.filter((player) => {
          return !this.game.players.includes(player);
        });
      },
      addPlayer: function (player) {
        this.hasErrors = false;
        this.$store.commit('addGamePlayer', {game: this.game, player});
      },
      removePlayer: function (player) {
        this.$store.commit('removeGamePlayer', {game: this.game, player});
      },
      startGame: function () {

        if (this.game.name && this.game.players.length) {
          this.$store.commit('addGame', {game: this.game});
        } else {
          this.hasErrors = true;
        }
      }
    },
    watch: {
      gameName: function (val) {
        this.game.name = val;
        this.hasErrors = false;
      }
    }
  }
</script>

<style lang="css">
  .topcoat-notification {
    position: absolute;
    top: 4.375rem;
    left: 0;
    right: 0;
    text-align: center;
  }

  .topcoat-list__item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .item-title {
    flex-grow: 1;
  }

  .start-btn {
    margin: 2rem 1.25rem;
    width: calc(100% - 1.25rem * 2);
  }
</style>
