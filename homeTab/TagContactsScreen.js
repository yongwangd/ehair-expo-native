import React from 'react';
import { connect } from 'react-redux';
import ContactListContainer from '../searchTab/ContactListContainer';
import { contactsSelector } from '../selectors/contactSelectors';

class TagContactsScreen extends React.Component {
  onContactClick = contact => {
    this.props.navigation.navigate('ContactDetailScreen', {
      contactId: contact._id,
      title: contact.name
    });
  };

  render() {
    console.log('render of tag contacts', this.props);
    return (
      <ContactListContainer
        style={{ flex: 1, display: 'flex' }}
        onContactClick={this.onContactClick}
        contacts={this.props.contacts}
      />
    );
  }
}

const mapProps = (state, ownProps) => {
  const { tag } = ownProps.navigation.state.params;
  const visibleContacts = contactsSelector(state).filter(
    ct => (ct.tagKeySet || {})[tag.key]
  );

  return {
    contacts: visibleContacts
  };
};

export default connect(mapProps)(TagContactsScreen);
