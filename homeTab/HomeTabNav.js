import ContactDetailScreen from '../searchTab/ContactDetailScreen';
import HomeLandingScreen from './HomeLandingScreen';
import { StackNavigator } from 'react-navigation';
import TagContactsScreen from './TagContactsScreen';
import TagListScreen from './TagListScreen';

export default StackNavigator({
  HomeLandingScreen: {
    screen: HomeLandingScreen,
    navigationOptions: {
      title: 'EHair Inventory'
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
