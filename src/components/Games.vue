<template lang="html">
  <div>
    <navigation-bar></navigation-bar>

    <ul class="topcoat-list topcoat-list__container">
      <li class="topcoat-list__item" v-for="game in games">{{game.name}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  import NavigationBar from './NavigationBar.vue';

  export default {
    components: {NavigationBar},
    computed: mapState({
      games: function (state) {
        return state.games;
      }
    })
  }
</script>

<style lang="css">
</style>
