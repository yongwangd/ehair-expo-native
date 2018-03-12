import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';
import React from 'react';

import { WHITE } from '../lib/colors';
import ContactDetailScreen from '../searchTab/ContactDetailScreen';
import HomeLandingScreen from './HomeLandingScreen';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import TagContactsScreen from './TagContactsScreen';
import TagListScreen from './TagListScreen';
import SearchResultScreen from './SearchResultScreen';

export default StackNavigator({
  HomeLandingScreen: {
    screen: HomeLandingScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'EHAIR',
      header: (
        <View
          style={{
            display: 'flex',
            paddingTop: 30,
            backgroundColor: WHITE
          }}
        >
          {/*           <Image
              source={require('../assets/images/ehair-logo.png')}
              style={{ width: 40, height: 20 }}
              resizeMode="contain"
  /> */}
          <SearchBoxContainer
            afterSubmit={text =>
              navigation.navigate('SearchResultScreen', { searchText: text })
            }
          />
        </View>
      )
    })
  },
  SearchResultScreen: {
    screen: SearchResultScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.searchText || 'Search'}`
    })
  },
  TagListScreen: {
    screen: TagListScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title || 'Tags Screen'}`,
      headerBackTitle: 'Back'
    })
  },
  TagContactsScreen: {
    screen: TagContactsScreen
  },
  ContactDetailScreen: {
    screen: ContactDetailScreen
  }
});
