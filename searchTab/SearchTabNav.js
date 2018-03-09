import {
  AQUA,
  BLACK,
  BLUE,
  GRAY,
  MAROON,
  NAVY,
  ORANGE,
  PURPLE,
  RED,
  TEAL,
  WHITE
} from '../lib/colors';
import { Image, Text, View } from 'react-native';

import ContactDetailScreen from './ContactDetailScreen';
import React from 'react';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import SearchScreen from './SearchScreen';
import { StackNavigator } from 'react-navigation';

export default StackNavigator(
  {
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Search Products',
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
            <SearchBoxContainer />
          </View>
        )
      })
    },
    ContactDetailScreen: {
      screen: ContactDetailScreen
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: WHITE
      },
      headerTintColor: BLACK,
      headerTitleStyle: {}
    }
  }
);
