import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import SearchScreen from './SearchScreen';
import ContactDetailScreen from './ContactDetailScreen';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import { WHITE } from '../lib/colors';

export default StackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Search Products',
      header: (
        <View style={{ paddingTop: 25, backgroundColor: WHITE }}>
          <SearchBoxContainer />
        </View>
      )
    })
  },
  ContactDetailScreen: {
    screen: ContactDetailScreen
  }
});
