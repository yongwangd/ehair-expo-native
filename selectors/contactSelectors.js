import { createSelector } from 'reselect';
import { propContains } from '../lib/littleFn';

const contactsSelector = state => state.contactChunk.contacts;
const searchTextSelector = state => state.contactChunk.searchText;

export const visibleContacts = createSelector(
  contactsSelector,
  searchTextSelector,
  (contacts, searchText) => {
    const r = contacts.filter(propContains(searchText, ['name']));
    console.log('contacts, searchtext', contacts, searchText, r);
    return r;
  }
);
