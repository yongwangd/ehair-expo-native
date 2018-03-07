import { StackNavigator } from 'react-navigation';
import SearchScreen from './SearchScreen';
import ContactDetailScreen from './ContactDetailScreen';

export default StackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: {
      title: 'Search Products'
    }
  },
  ContactDetailScreen: {
    screen: ContactDetailScreen
  }
});
