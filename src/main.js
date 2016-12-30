import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import {sync} from 'vuex-router-sync';

import 'reset-css/reset.css';
import 'topcoat/css/topcoat-mobile-dark.css';

import router from './router.js';
import store from './store/index.js';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
});
