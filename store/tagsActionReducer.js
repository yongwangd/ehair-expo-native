import R from 'ramda';
import { initialTagState } from './initialState';

const initialState = {
  tags: initialTagState
};

export const FETCH_TAGS = 'FETCH_TAGS';

export const fetchTags = payload => ({
  type: FETCH_TAGS,
  payload
});

const actionHandler = {
  [FETCH_TAGS]: (state, { payload }) => R.assoc('tags', payload, state)
};

const tagsReducer = (state = initialState, action) => {
  const handler = actionHandler[action.type];
  return handler ? handler(state, action) : state;
};

export default tagsReducer;
