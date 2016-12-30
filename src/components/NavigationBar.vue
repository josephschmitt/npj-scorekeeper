<template lang="html">
  <div class="topcoat-navigation-bar">
    <div class="topcoat-navigation-bar__item center full">
      <h1 class="topcoat-navigation-bar__title">{{title}}</h1>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'navigation-bar',
    computed: mapState({
      title: (state) => state.route.name || ''
    })
  }
</script>

<style lang="css" scoped>
  .topcoat-navigation-bar {
    flex-shrink: 0;
  }
</style>
