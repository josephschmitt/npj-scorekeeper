<template lang="html">
  <f7-page name="games">
    <f7-list>
      <f7-list-item v-for="game in games" :title="game.name" link=true swipeout
          @swipeout:deleted="deleteGame(game)">
        <f7-swipeout-actions>
          <f7-swipeout-button delete>Delete</f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    computed: mapState({
      games(state) {
        return state.games;
      }
    }),
    methods: {
      deleteGame(game) {
        this.$store.commit('deleteGame', {game});
      }
    }
  }
</script>

<style lang="css">
</style>
