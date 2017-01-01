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
    position: sticky;
    top: 0;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .topcoat-navigation-bar__item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .topcoat-navigation-bar__item.center {
    flex-grow: 1;
  }

  .topcoat-navigation-bar__item.left,
  .topcoat-navigation-bar__item.right {
    position: absolute;
  }

  .topcoat-navigation-bar__item.left {
    left: 1rem;
  }

  .topcoat-navigation-bar__item.right {
    right: 1rem;
  }
</style>
