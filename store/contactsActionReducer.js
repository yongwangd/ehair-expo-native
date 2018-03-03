import { createAction, makeReducer } from '../lib/reduxUtil';

const initState = [];

export const CONTACTS_FETCHED = 'CONTACTS_FETCHED';

export const contactsFetched = products =>
  createAction(CONTACTS_FETCHED, products);

const productsHandler = {
  [CONTACTS_FETCHED]: (state, { payload }) => payload
};

export default makeReducer(initState, productsHandler);
