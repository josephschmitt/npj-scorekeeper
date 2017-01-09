<template lang="html">
  <f7-toolbar tabbar labels>
    <template v-for="(tab, index) in tabs">
      <f7-link v-if="tab.isModal" :icon-f7="tab.icon" :text="tab.name" :open-popup="`#popup-${tab.id}`"
          tab-link="true" :active="index === 0">
      </f7-link>
      <f7-link v-else :icon-f7="tab.icon" :text="tab.name" :tab-link="`#tabpanel-${tab.id}`"
          :active="index === 0">
      </f7-link>
    </template>
  </f7-toolbar>
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
      tabs: () => routes.filter((route) => route.isMainNav)
    }
  }
</script>

<style lang="css" scoped>
</style>
