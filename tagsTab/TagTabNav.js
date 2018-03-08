import { StackNavigator } from 'react-navigation';
import TagLandingScreen from './TagLandingScreen';
import TagListScreen from './TagListScreen';
import SearchScreen from '../searchTab/SearchScreen';

export default StackNavigator({
  TagLandingScreen: {
    screen: TagLandingScreen,
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
    screen: SearchScreen
  }
});
