export default {
  state: [],
  mutations: {
    addNewPlayer: function (state, {player}) {
      state.push(player);
    },
    deletePlayer: function (state, {player}) {
      const index = state.indexOf(player);
      state.splice(index, 1);
    }
  }
};
