<template lang="html">
  <div id="app">
    <navigation-bar></navigation-bar>
    <tabs tabs=""></tabs>
  </div>
</template>

<script>
  import TabContent from './components/TabContent.vue';
  import NavigationBar from './components/NavigationBar.vue';
  import Tabs from './components/Tabs.vue';

  export default {
    name: 'app',
    components: {
      TabContent,
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
