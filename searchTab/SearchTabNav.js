import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import SearchScreen from './SearchScreen';
import ContactDetailScreen from './ContactDetailScreen';
import { BLUE, LIME, TEAL, ORANGE, WHITE } from '../lib/colors';
import SearchBox from '../components/SearchBox';

export default StackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Search Products',
      header: (
        <View style={{ paddingTop: 25, backgroundColor: WHITE }}>
          <SearchBox />
        </View>
      )
    })
  },
  ContactDetailScreen: {
    screen: ContactDetailScreen
  }
});
