import React from 'react';
import { connect } from 'react-redux';
import ContactListContainer from '../searchTab/ContactListContainer';
import { contactsSelector } from '../selectors/contactSelectors';

class TagContactsScreen extends React.Component {
  render() {
    console.log('render of tag contacts', this.props);
    return (
      <ContactListContainer
        style={{ flex: 1, display: 'flex' }}
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
