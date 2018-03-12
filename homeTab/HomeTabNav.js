import { StackNavigator } from 'react-navigation';

import ContactDetailScreen from '../searchTab/ContactDetailScreen';
import HomeLandingScreen from './HomeLandingScreen';
import TagContactsScreen from './TagContactsScreen';
import TagListScreen from './TagListScreen';

export default StackNavigator({
  HomeLandingScreen: {
    screen: HomeLandingScreen,
    navigationOptions: {
      title: 'EHAIR'
    }
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
