<template lang="html">
  <div class="tab-panel" :aria-labelledby="`tabpanel-${tabName}`">
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'tab-panel',
    computed: mapState({
      tabName: (state) => `tabpanel-${state.route.name}`
    })
  };
</script>

<style lang="css" scoped>
  .tab-panel {
    flex-grow: 1;
    flex-shrink: 1;
    overflow-y: auto;
  }
</style>
