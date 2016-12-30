import Vue from 'vue';
import Vuex from 'vuex';

import App from './App';

import store from './store/index.js';

Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
});