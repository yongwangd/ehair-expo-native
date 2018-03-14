import React from 'react';
import { connect } from 'react-redux';
import ContactListContainer from '../searchTab/ContactListContainer';
import { watchListSelector } from '../selectors/contactSelectors';

const WatchList = props => (
  <ContactListContainer
    style={{ flex: 1, display: 'flex' }}
    contacts={props.contacts}
  />
);

const mapProps = state => {
  const watchedContacts = watchListSelector(state);
  return { contacts: watchedContacts };
};

export default connect(mapProps)(WatchList);
