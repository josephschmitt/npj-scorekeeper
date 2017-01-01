function newId(state) {
  let highest = 0;
  state.forEach((current) => highest = Math.max(highest, current.id));

  return highest + 1;
}

export default {
  state: [],
  mutations: {
    addNewPlayer: function (state, {player}) {
      const newPlayer = Object.assign(player, {id: newId(state), dateAdded: new Date().getTime()});
      state.push(newPlayer);
    },
    deletePlayer(state, {player}) {
      const index = state.indexOf(player);
      state.splice(index, 1);
    },
    updatePlayer(state, {player, changes}) {
      const updated = Object.assign(player, changes);
      const index = state.indexOf(player);
      state.splice(index, 1, updated);
    }
  }
};
