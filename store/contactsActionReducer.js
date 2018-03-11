import R from 'ramda';
import { createAction, makeReducer } from '../lib/reduxUtil';
import { initialContactState } from './initialState';

const initState = {
  contacts: initialContactState,
  searchText: 'th'
};

export const CONTACTS_FETCHED = 'CONTACTS_FETCHED';
export const UPDATE_CONTACT_SEARCH = 'UPDATE_CONTACT_SEARCH';

export const contactsFetched = products =>
  createAction(CONTACTS_FETCHED, products);

export const updateContactSearch = search =>
  createAction(UPDATE_CONTACT_SEARCH, search);

const productsHandler = {
  [CONTACTS_FETCHED]: (state, { payload }) =>
    R.assoc('contacts', payload, state),
  [UPDATE_CONTACT_SEARCH]: (state, { payload }) =>
    R.assoc('searchText', payload, state)
};

export default makeReducer(initState, productsHandler);
