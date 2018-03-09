import { GRAY, WHITE } from '../lib/colors';
import { Image, Text, View } from 'react-native';

import ContactDetailScreen from './ContactDetailScreen';
import React from 'react';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import SearchScreen from './SearchScreen';
import { StackNavigator } from 'react-navigation';

export default StackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Search Products',
      header: (
        <View
          style={{
            paddingTop: 25,
            backgroundColor: GRAY,
            display: 'flex'
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
});
