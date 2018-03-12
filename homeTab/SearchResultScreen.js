import { connect } from 'react-redux';
import { View } from 'react-native';
import React from 'react';

import { searchFilteredContactsSelector } from '../selectors/contactSelectors';
import ContactListContainer from '../searchTab/ContactListContainer';

class SearchResultScreen extends React.Component {
  cancelSearch = () => {
    // this.searchBarElm.blur();
    console.log('searchelm', this.searchBarElm);
    this.searchBarElm.inputRef.blur();
  };

  onContactClick = contact => {
    this.props.navigation.navigate('ContactDetailScreen', {
      contactId: contact._id,
      title: contact.name
    });
  };

  render() {
    const { contacts, searchText, changeSearchText } = this.props;
    console.log('rops', searchText, changeSearchText);
    return (
      <View style={{ display: 'flex', flex: 1 }}>
        <ContactListContainer
          contacts={contacts}
          style={{ flex: 1, display: 'flex' }}
          onContactClick={this.onContactClick}
        />
      </View>
    );
  }
}

const mapProps = state => ({
  searchText: state.contactChunk.searchText,
  contacts: searchFilteredContactsSelector(state)
});

export default connect(mapProps)(SearchResultScreen);
