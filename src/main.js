import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import {sync} from 'vuex-router-sync';

import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'

import 'framework7/dist/css/framework7.ios.min.css'
import 'framework7/dist/css/framework7.ios.colors.min.css'
import 'framework7-icons/css/framework7-icons.css';
import 'framework7-icons/fonts/Framework7Icons-Regular.ttf';
/* OR for Material Theme:
import 'framework7/dist/css/framework7.material.min.css'
import 'framework7/dist/css/framework7.material.colors.min.css'
*/

import router, {routes} from './router.js';
import store from './store/index.js';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Framework7Vue);

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes
  },
  // router,
  store,
  components: { App }
});
