export default {
  state: [],
  mutations: {
    addGame: function (state, {game}) {
      console.log('addGame', state, game);
      state.push(game);
    },
    deleteGame: function (state, {game}) {
      const index = state.indexOf(game);
      state.splice(index, 1);
    },
    addPlayer: function (state, {game, player}) {
      game.players.push(player);
    },
    removePlayer: function (state, {game, player}) {
      const players = game.players;
      const index = players.indexOf(player);
      players.splice(index, 1);
    }
  }
};
