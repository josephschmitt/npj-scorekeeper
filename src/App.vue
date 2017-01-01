<template lang="html">
  <div id="app">
    <tab-panel></tab-panel>
    <tabs tabs=""></tabs>
  </div>
</template>

<script>
  import TabPanel from './components/TabPanel.vue';
  import Tabs from './components/Tabs.vue';

  export default {
    name: 'app',
    components: {
      TabPanel,
      Tabs
    }
  }
</script>

<style lang="css">
  body, #app {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  body {
    height: 100vh;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .topcoat-list input[type="text"],
  .topcoat-list input[type="search"],
  .topcoat-list textarea {
    margin: 0.5rem 0.75rem;
  }

  .topcoat-list input.full[type="text"],
  .topcoat-list input.full[type="search"],
  .topcoat-list textarea.full {
    width: calc(100% - 0.75rem * 2);
  }

</style>
