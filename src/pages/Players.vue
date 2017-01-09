<template lang="html">
  <f7-page name="players">
    <f7-navbar sliding>
      <f7-nav-center sliding>Players</f7-nav-center>
      <f7-nav-right>
        <f7-link icon-f7="add" open-panel="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-searchbar
        cancel-link="Cancel"
        search-list="#players-list"
        placeholder="Filter players"
        :clear="true">
    </f7-searchbar>
    <f7-list media-list sortable id="players-list">
      <f7-list-item v-for="player in players" swipeout :title="player.name"
          @swipeout:deleted="deletePlayer(player)">
        <f7-icon slot="media" f7="person" color="gray"></f7-icon>
        <f7-swipeout-actions>
          <f7-swipeout-button @click.stop="editPlayer(player)" color="blue">Edit</f7-swipeout-button>
          <f7-swipeout-button delete>Delete</f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
    </f7-list>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="No players found"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    data() {
      return {
        editMode: false
      };
    },
    computed: mapState({
      players: function(state) {
        return state.players;
      }
    }),
    methods: {
      toggleEditMode: function () {
        this.editMode = !this.editMode;
      },
      addNewPlayer: function () {
        this.$router.push({name: 'Player Details', params: {id: 'new'}});
      },
      editPlayer: function (player) {
        this.editMode && this.$router.push({name: 'Player Details', params: {id: player.id}});
      },
      deletePlayer: function (player) {
        this.$store.commit('deletePlayer', {player});
      }
    }
  }
</script>

<style lang="css">
</style>
