import R from 'ramda';

import { createAction, makeReducer } from '../lib/reduxUtil';

const initialState = {
  connectionInfo: {},
  userInfo: {}
};

export const CONNECTION_INFO = 'CONNECTION_INFO';
export const SET_USER_INFO = 'SET_USER_INFO';

export const setConnectionInfo = info => createAction(CONNECTION_INFO, info);
export const setUserInfo = info => createAction(SET_USER_INFO, info);

const actionHandler = {
  [CONNECTION_INFO]: (state, { payload }) =>
    R.assoc('connectionInfo', payload, state),
  [SET_USER_INFO]: (state, { payload }) => R.assoc('userInfo', payload, state)
};

export default makeReducer(initialState, actionHandler);
