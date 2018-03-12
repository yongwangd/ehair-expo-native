import R from 'ramda';

import { createAction, makeReducer } from '../lib/reduxUtil';

const initialState = {
  connectionInfo: {}
};

export const CONNECTION_INFO = 'CONNECTION_INFO';

export const setConnectionInfo = info => createAction(CONNECTION_INFO, info);

const actionHandler = {
  [CONNECTION_INFO]: (state, { payload }) =>
    R.assoc('connectionInfo', payload, state)
};

export default makeReducer(initialState, actionHandler);
