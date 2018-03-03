export const createAction = (type, payload) => ({
  type,
  payload
});

//Take initial state and handler object
//Create Reducer for Redux
//Simpler then Switch statement on the web
export const makeReducer = (initState, handler) => (
  store = initState,
  action
) => (handler[action.type] ? handler[action.type](store, action) : store);
