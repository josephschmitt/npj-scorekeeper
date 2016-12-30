import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// import * as actions from './actions.js';
// import * as getters from './getters.js';

import games from './modules/games.js';
import players from './modules/players.js';

Vue.use(Vuex)

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    games,
    players
  },
  plugins: [createPersistedState()],
  strict: true
})
