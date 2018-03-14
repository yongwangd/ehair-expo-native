import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { TabBarBottom, TabNavigator } from 'react-navigation';
import React from 'react';

import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import HomeTabNav from '../homeTab/HomeTabNav';
import SearchTabNav from '../searchTab/SearchTabNav';
import SettingsScreen from '../screens/SettingsScreen';

const tabIconConfig = {
  'Home-ios-focused': 'ios-home',
  'Home-ios': 'ios-home-outline',
  'Home-android': 'md-home',

  'Profile-ios-focused': 'ios-person',
  'Profile-ios': 'ios-person-outline',
  'Profile-android': 'md-person'
};

const getIconName = (tabName, platform, focused) => {
  const key = `${tabName}-${platform}${focused ? '-focused' : ''}`;
  return tabIconConfig[key];
};

export default TabNavigator(
  {
    Home: {
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
    Expo: {
      screen: HomeScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },

  {
    initialRouteName: 'Home',
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

        iconName = getIconName(routeName, Platform.OS, focused);
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
