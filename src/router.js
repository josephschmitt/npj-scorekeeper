import VueRouter from 'vue-router';

import Games from './components/Games.vue';
import Players from './components/Players.vue';
import NewGame from './components/NewGame.vue';

export const routes = [
  {path: '/', redirect: '/games'},
  {path: '/games', component: Games, name: 'Games', isMainNav: true},
  {path: '/new', component: NewGame, name: 'New Game', isMainNav: true, isModal: true},
  {path: '/players', component: Players, name: 'Players', isMainNav: true},
  {path: '/settings', component: {}, name: 'Settings'}
];

const router = new VueRouter({
  routes
});

export default router;
