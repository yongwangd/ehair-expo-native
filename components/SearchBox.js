import React from 'react';
import { SearchBar } from 'antd-mobile';

const SearchBox = props => {
  const { searchText, onSubmit, onChange } = props;
  return (
    <SearchBar
      placeholder="Search"
      value={searchText}
      onSubmit={value => onSubmit && onSubmit(value)}
    />
  );
};
export default SearchBox;
