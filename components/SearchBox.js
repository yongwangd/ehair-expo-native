import React from 'react';
import { SearchBar } from 'antd-mobile';

const SearchBox = props => {
  const { searchText, onSubmit, ...rest } = props;
  return (
    <SearchBar
      {...rest}
      placeholder="Search"
      value={searchText}
      onSubmit={value => onSubmit && onSubmit(value)}
    />
  );
};
export default SearchBox;
