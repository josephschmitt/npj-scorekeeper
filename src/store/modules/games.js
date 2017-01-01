export default {
  state: [],
  mutations: {
    addGame: function (state, {game}) {
      state.push(game);
    },
    deleteGame: function (state, {game}) {
      const index = state.indexOf(game);
      state.splice(index, 1);
    },
    addGamePlayer: function (state, {game, player}) {
      game.players.push(player);
    },
    removeGamePlayer: function (state, {game, player}) {
      const players = game.players;
      const index = players.indexOf(player);
      players.splice(index, 1);
    }
  }
};
