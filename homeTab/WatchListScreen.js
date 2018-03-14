import React from 'react';
import { connect } from 'react-redux';
import ContactListContainer from '../searchTab/ContactListContainer';
import { watchListSelector } from '../selectors/contactSelectors';

class WatchListScreen extends React.Component {
  onContactClick = contact => {
    this.props.navigation.navigate('ContactDetailScreen', {
      contactId: contact._id,
      title: contact.name
    });
  };

  render() {
    return (
      <ContactListContainer
        style={{ flex: 1, display: 'flex' }}
        contacts={this.props.contacts}
        onContactClick={this.onContactClick}
      />
    );
  }
}

const mapProps = state => {
  const watchedContacts = watchListSelector(state);
  return { contacts: watchedContacts };
};

export default connect(mapProps)(WatchListScreen);
