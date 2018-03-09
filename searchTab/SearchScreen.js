import { SearchBar, WhiteSpace } from 'antd-mobile';
import { Text, View } from 'react-native';

import ContactListContainer from './ContactListContainer';
import React from 'react';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import { connect } from 'react-redux';
import { searchFilteredContactsSelector } from '../selectors/contactSelectors';
import { updateContactSearch } from '../store/contactsActionReducer';

class SearchScreen extends React.Component {
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
        <SearchBar
          placeholder="Search"
          defaultValue={searchText}
          onSubmit={changeSearchText}
          cancelText="Cancel"
          onCancel={this.cancelSearch}
          onClear={e => console.log('cleared')}
          ref={ref => (this.searchBarElm = ref)}
        />
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

const mapDispatch = dispatch => ({
  changeSearchText: value => dispatch(updateContactSearch(value))
});

export default connect(mapProps, mapDispatch)(SearchScreen);
