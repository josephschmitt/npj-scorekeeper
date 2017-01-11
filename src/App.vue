<template lang="html">
  <div id="app">
    <f7-statusbar></f7-statusbar>
    <f7-views navbar-through :dynamicNavbar="true" tabs>
      <f7-popup id="popup-new-game" @popup:opened="onPopupOpen" @popup:closed="onPopupClosed">
        <f7-pages>
          <NewGame :popup-events="popupEvents"></NewGame>
        </f7-pages>
      </f7-popup>
      <f7-view id="tabpanel-games" url="/games" tab active>
        <f7-navbar sliding>
          <f7-nav-center sliding>Games</f7-nav-center>
        </f7-navbar>
        <f7-pages>
          <Games></Games>
        </f7-pages>
      </f7-view>
      <f7-view id="tabpanel-players" url="/players" tab>
        <f7-pages>
          <Players></Players>
        </f7-pages>
      </f7-view>
      <Tabs></Tabs>
    </f7-views>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Tabs from './components/Tabs.vue';
  import Games from './pages/Games.vue';
  import Players from './pages/Players.vue';
  import NewGame from './pages/NewGame.vue';

  const popupEvents = new Vue();

  export default {
    name: 'app',
    components: {
      Tabs,
      Games,
      Players,
      NewGame
    },
    data() {
      return {
        popupEvents
      };
    },
    methods: {
      onPopupOpen() {
        popupEvents.$emit('popup:open');
      },
      onPopupClosed() {
        popupEvents.$emit('popup:closed');
      }
    }
  }
</script>

<style lang="css">
  .list-block:first-child {
    margin-top: 0;
  }
</style>
