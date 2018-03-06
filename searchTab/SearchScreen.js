import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'antd-mobile';
import { updateContactSearch } from '../store/contactsActionReducer';
import ContactListContainer from './ContactListContainer';

class SearchScreen extends React.Component {
  cancelSearch = () => {
    // this.searchBarElm.blur();
    console.log('searchelm', this.searchBarElm);
    this.searchBarElm.inputRef.blur();
  };
  componentDidMount() {}
  render() {
    const { searchText, changeSearchText } = this.props;
    console.log('rops', searchText, changeSearchText);
    return (
      <View>
        <SearchBar
          placeholder="Search"
          defaultValue={searchText}
          onSubmit={changeSearchText}
          cancelText="Cancel"
          onCancel={this.cancelSearch}
          onClear={e => console.log('cleared')}
          ref={ref => (this.searchBarElm = ref)}
        />
        <Text>Hello products</Text>
        <ContactListContainer />
      </View>
    );
  }
}

const mapProps = state => ({
  searchText: state.contactChunk.searchText,
  contacts: state.contactChunk.contacts
});

const mapDispatch = dispatch => ({
  changeSearchText: value => dispatch(updateContactSearch(value))
});

export default connect(mapProps, mapDispatch)(SearchScreen);
