import { StackNavigator } from 'react-navigation';
import { View, Text, Image } from 'react-native';
import React from 'react';

import { WHITE, GRAY } from '../lib/colors';
import ContactDetailScreen from '../searchTab/ContactDetailScreen';
import HomeLandingScreen from './HomeLandingScreen';
import SearchResultScreen from './SearchResultScreen';
import TagContactsScreen from './TagContactsScreen';
import TagListScreen from './TagListScreen';
import TopSearchBar from '../components/TopSearchBar';
import WatchListScreen from './WatchListScreen';

export default StackNavigator({
  HomeLandingScreen: {
    screen: HomeLandingScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'EHAIR',
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: WHITE
      },
      headerTitle: (
        <View style={{ flex: 1, marginLeft: 7, marginRight: 7 }}>
          <TopSearchBar
            placeholder="Search Products"
            //   LeftCmp={
            //     <Image
            //       source={require('../assets/images/ehair-logo.png')}
            //       style={{ width: 60, height: 30 }}
            //       resizeMode="contain"
            //     />
            //   }
            afterSubmit={text =>
              text &&
              text.trim() &&
              navigation.navigate('SearchResultScreen', {
                searchText: text.trim()
              })
            }
          />
        </View>
      )
    })
  },
  WatchListScreen: {
    screen: WatchListScreen
  },
  SearchResultScreen: {
    screen: SearchResultScreen,
    navigationOptions: ({ navigation }) => ({
      headerBackTitle: null,
      headerTitle: navigation.state.params.searchText
      //   headerTitle: (
      //     <TopSearchBar
      //       afterSubmit={text =>
      //         navigation.navigate('SearchResultScreen', { searchText: text })
      //       }
      //     />
      //   ),
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
