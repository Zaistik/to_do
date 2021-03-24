export function load(state, data) {
    console.log(data);
    state.properties = data
}

export function changecompletedvalue(state,listname,todoname) {
  state.listes[listname][todoname] = !state.listes[listname][todoname];
}
