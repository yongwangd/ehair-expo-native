import { StackNavigator } from 'react-navigation';
import SearchScreen from '../screens/SearchScreen';

export default StackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: {
      title: 'Search Products'
    }
  }
});
