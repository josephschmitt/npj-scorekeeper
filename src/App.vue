<template lang="html">
  <div id="app">
    <navigation-bar></navigation-bar>
    <tab-panel></tab-panel>
    <tabs tabs=""></tabs>
  </div>
</template>

<script>
  import TabPanel from './components/TabPanel.vue';
  import NavigationBar from './components/NavigationBar.vue';
  import Tabs from './components/Tabs.vue';

  export default {
    name: 'app',
    components: {
      TabPanel,
      NavigationBar,
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
    min-height: 100vh;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
