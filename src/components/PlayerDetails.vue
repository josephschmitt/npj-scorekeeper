<template lang="html">
  <div>
    <navigation-bar></navigation-bar>
    <ul class="topcoat-list topcoat-list__container">
      <input type="text" class="topcoat-text-input full" placeholder="Player Name" v-model="name">
    </ul>
    <button class="start-btn topcoat-button--cta full" @click="save()">
      <span v-if="!player">Add Player</span>
      <span v-else>Save Player</span>
    </button>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  import NavigationBar from './NavigationBar.vue';

  function updateName() {
    this.name = '';

    if (typeof this.player !== 'undefined' && this.player !== null) {
      this.name = this.player.name;
    }
  }

  export default {
    components: {NavigationBar},
    data() {
      return {
        name: ''
      };
    },
    computed: {
      player: function () {
        const routeId = this.$route.params.id;
        const playerId = routeId !== 'new' ? routeId.toString() : null;

        return this.allPlayers.find((player) => {
          return player.id.toString() === playerId;
        });
      },
      ...mapState({
        allPlayers: function(state) {
          return state.players;
        }
      })
    },
    mounted: updateName,
    watch: {
      '$route': updateName
    },
    methods: {
      save: function () {
        const changes = {name: this.name};

        if (this.player) {
          this.$store.commit('updatePlayer', {player: this.player, changes});
        } else {
          this.$store.commit('addNewPlayer', {player: changes});
        }

        this.$router.push('/players');
      }
    }
  }
</script>

<style lang="css">
</style>
