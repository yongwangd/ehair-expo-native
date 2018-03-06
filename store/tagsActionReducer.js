const initialState = [];

export const FETCH_TAGS = "FETCH_TAGS";

export const fetchTags = payload => ({
  type: FETCH_TAGS,
  payload
});

const actionHandler = {
  [FETCH_TAGS]: (state, { payload }) => payload
};

const tagsReducer = (state = initialState, action) => {
  const handler = actionHandler[action.type];
  return handler ? handler(state, action) : state;
};

export default tagsReducer;
