import R from 'ramda';
import { createAction, makeReducer } from '../lib/reduxUtil';
import { initialContactState } from './initialState';

const initState = {
  contacts: initialContactState,
  savedContactKeys: {},
  searchText: ''
};

export const CONTACTS_FETCHED = 'CONTACTS_FETCHED';
export const UPDATE_CONTACT_SEARCH = 'UPDATE_CONTACT_SEARCH';
export const SAVE_CONTACT = 'SAVE_CONTACT';
export const UNSAVE_CONTACT = 'UNSAVE_CONTACT';

export const contactsFetched = products =>
  createAction(CONTACTS_FETCHED, products);

export const updateContactSearch = search =>
  createAction(UPDATE_CONTACT_SEARCH, search);

export const saveContact = contactKey => createAction(SAVE_CONTACT, contactKey);
export const unsaveContact = contactKey =>
  createAction(UNSAVE_CONTACT, contactKey);

const productsHandler = {
  [CONTACTS_FETCHED]: (state, { payload }) =>
    R.assoc('contacts', payload, state),
  [UPDATE_CONTACT_SEARCH]: (state, { payload }) =>
    R.assoc('searchText', payload, state),
  [SAVE_CONTACT]: (state, { payload }) =>
    R.assocPath(['savedContactKeys', payload], true, state),
  [UNSAVE_CONTACT]: (state, { payload }) =>
    R.dissocPath(['savedContactKeys', payload], state)
};

export default makeReducer(initState, productsHandler);
