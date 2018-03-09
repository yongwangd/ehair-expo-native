import { createSelector } from 'reselect';
import { propContains } from '../lib/littleFn';

const contactsSelector = state => state.contactChunk.contacts;
const searchTextSelector = state => state.contactChunk.searchText;

export const searchFilteredContactsSelector = createSelector(
  contactsSelector,
  searchTextSelector,
  (contacts, searchText) =>
    contacts.filter(propContains(searchText, ['name', 'subtitle']))
);
