import { Text, View } from 'react-native';
import React from 'react';

import { WHITE } from '../lib/colors';
import SearchBoxContainer from '../containers/SearchBoxContainer';

const TopSearchBar = props => {
  const { afterSubmit, LeftCmp, RightCmp, ...rest } = props;
  console.log(props);

  return (
    <View
      style={{
        display: 'flex',
        backgroundColor: WHITE,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {LeftCmp}
      <SearchBoxContainer {...rest} afterSubmit={afterSubmit} />
      {RightCmp}
    </View>
  );
};

export default TopSearchBar;
