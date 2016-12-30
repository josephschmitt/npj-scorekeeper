<template lang="html">
  <div class="topcoat-navigation-bar">
    <div class="topcoat-navigation-bar__item left">
      <slot name="navigation-bar-button-left"></slot>
    </div>
    <div class="topcoat-navigation-bar__item center">
      <h1 class="topcoat-navigation-bar__title">{{title}}</h1>
    </div>
    <div class="topcoat-navigation-bar__item right">
      <slot name="navigation-bar-button-right"></slot>
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
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
  }

  .topcoat-navigation-bar__item.center {
    flex-grow: 1;
  }
</style>
