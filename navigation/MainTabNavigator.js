import { TabBarBottom, TabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import HomeTabNav from '../homeTab/HomeTabNav';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import React from 'react';
import SearchTabNav from '../searchTab/SearchTabNav';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    Links: {
      screen: HomeTabNav,
      navigationOptions: {
        header: null
      }
    },
    Search: {
      screen: SearchTabNav,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: HomeScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },

  {
    initialRouteName: 'Search',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Search':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Links':
            iconName =
              Platform.OS === 'ios'
                ? `ios-link${focused ? '' : '-outline'}`
                : 'md-link';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios'
                ? `ios-options${focused ? '' : '-outline'}`
                : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
);
