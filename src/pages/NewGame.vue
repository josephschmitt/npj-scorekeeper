<template lang="html">
  <f7-page name="new-game">
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link text="Cancel" close-popup="#popup-new-game"></f7-link>
      </f7-nav-left>
      <f7-nav-center sliding>New Game</f7-nav-center>
      <f7-nav-right></f7-nav-right>
    </f7-navbar>
    <f7-list media-list>
      <f7-list-item>
        <f7-icon slot="media" f7="layers" :color="hasPlayers && !!gameName ? 'green' : 'red'"></f7-icon>
        <div class="item-input">
          <input type="text" placeholder="Game Name" v-model="gameName" required>
        </div>
      </f7-list-item>
      <f7-list-group v-if="hasPlayers">
        <f7-list-item title="Selected Players" group-title></f7-list-item>
        <f7-list-item v-for="player in game.players" :title="player.name">
          <f7-icon slot="media" f7="person" color="gray"></f7-icon>
          <f7-link slot="after" icon-f7="delete_round_fill" @click="removePlayer(player)"></f7-link>
        </f7-list-item>
      </f7-list-group>
      <f7-list-group v-if="availablePlayers().length">
        <f7-list-item title="Available Players" group-title></f7-list-item>
        <f7-list-item v-for="player in availablePlayers()" :title="player.name">
          <f7-icon slot="media" f7="person" color="gray"></f7-icon>
          <f7-link slot="after" icon-f7="add_round_fill" @click="addPlayer(player)"></f7-link>
        </f7-list-item>
      </f7-list-group>
    </f7-list>
    <f7-block>
      <f7-button big fill @click="startGame()" :disabled="!hasPlayers">Start Game</f7-button>
    </f7-block>
  </f7-page>
</template>

<script>
  import {mapState} from 'vuex';

  function defaults() {
    return {
      gameName: '',
      errorMsg: 'Name and at least one player required.',
      hasErrors: false,
      game: {
        name: '',
        players: []
      }
    };
  }

  export default {
    data: defaults,
    props: ['popup-events'],
    computed: {
      hasPlayers: function () {
        return !!this.game.players.length;
      },
      ...mapState({
        allPlayers: function (state) {
          return state.players;
        }
      })
    },
    methods: {
      reset: function () {
        Object.assign(this.$data, defaults());
      },
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
    },
    beforeMount() {
      this.popupEvents.$on('popup:closed', this.reset);
    }
  }
</script>

<style lang="css">
</style>
