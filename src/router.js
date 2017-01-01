import VueRouter from 'vue-router';

import Games from './components/Games.vue';
import Players from './components/Players.vue';
import PlayerDetails from './components/PlayerDetails.vue';
import NewGame from './components/NewGame.vue';

export const routes = [
  {path: '/', redirect: '/games'},
  {path: '/games', component: Games, name: 'Games', isMainNav: true},
  {path: '/new', component: NewGame, name: 'New Game', isMainNav: true, isModal: true},
  {path: '/players', component: Players, name: 'Players', isMainNav: true},
  {path: '/players/:id/details', component: PlayerDetails, name: 'Player Details'},
  {path: '/settings', component: {}, name: 'Settings'}
];

export default new VueRouter({
  routes
});
