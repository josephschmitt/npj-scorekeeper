<template lang="html">
  <ul class="topcoat-tab-bar full" role="tablist">
    <li class="topcoat-tab-bar__item" role="tab" v-for="tab in tabs" :aria-controls="`tabpanel-${tab.name}`"
        :aria-selected="active === tab.name">
      <input type="radio" v-model="active" :value="tab.name" />
      <router-link class="topcoat-tab-bar__button" :to="tab.path">{{tab.name}}</router-link>
    </li>
  </ul>
</template>

<script>
  import {mapState} from 'vuex';
  import {routes} from '../router.js';

  export default {
    name: 'tabs',
    computed: {
      active() {
        return this.$store.state.route.name;
      },
      ...mapState({
        tabs: () => routes.filter((route) => route.isMainNav)
      })
    }
  }
</script>

<style lang="css" scoped>
  .topcoat-tab-bar {
    flex-shrink: 0;
  }

  .topcoat-tab-bar__button {
    display: block;
    text-align: center;
  }
</style>
