import { StackNavigator } from 'react-navigation';
import TagLandingScreen from './TagLandingScreen';
import TagListScreen from './TagListScreen';

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
      title: `${navigation.state.params.title || 'No Title pass'}`,
      headerBackTitle: 'Back'
    })
  }
});
