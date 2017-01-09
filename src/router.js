import VueRouter from 'vue-router';

import Games from './pages/Games.vue';
import Players from './pages/Players.vue';
import PlayerDetails from './pages/PlayerDetails.vue';
import NewGame from './pages/NewGame.vue';

export const routes = [
  // {path: '/', redirect: '/games'},
  {path: '/games', component: Games, name: 'Games', id: 'games', icon: 'collection', isMainNav: true},
  {path: '/new', component: NewGame, name: 'New Game', id: 'new-game', icon: 'add_round', isMainNav: true, isModal: true},
  {path: '/players', component: Players, name: 'Players', id: 'players', icon: 'persons', isMainNav: true},
  {path: '/players/:id/details', component: PlayerDetails, name: 'Player Details', id: 'player-details'},
  {path: '/settings', component: {}, name: 'Settings'}
];

export default new VueRouter({
  routes
});
