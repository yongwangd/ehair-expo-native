import { createSelector } from 'reselect';
import { propContains } from '../lib/littleFn';

const searchTextSelector = state => state.contactChunk.searchText;
export const contactsSelector = ({ contactChunk }) => {
  const { savedContactKeys, contacts } = contactChunk;
  console.log('savedkeys', savedContactKeys);
  const mapped = contacts.map(ct => ({
    ...ct,
    saved: savedContactKeys[ct.ehairKey]
  }));
  console.log('mapped contact', mapped);
  return mapped;
};

export const searchFilteredContactsSelector = createSelector(
  contactsSelector,
  searchTextSelector,
  (contacts, searchText) =>
    contacts.filter(propContains(searchText, ['name', 'subtitle']))
);
