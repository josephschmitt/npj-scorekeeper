export default {
  state: [],
  mutations: {
    addGame(state, {game}) {
      state.push(game);
    },
    deleteGame(state, {game}) {
      const index = state.indexOf(game);
      state.splice(index, 1);
    },
    addGamePlayer(state, {game, player}) {
      game.players.push(player);
    },
    removeGamePlayer(state, {game, player}) {
      const players = game.players;
      const index = players.indexOf(player);
      players.splice(index, 1);
    }
  }
};
