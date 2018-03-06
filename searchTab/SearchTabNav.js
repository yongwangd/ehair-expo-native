import { StackNavigator } from 'react-navigation';
import SearchScreen from './SearchScreen';

export default StackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: {
      title: 'Search Products'
    }
  }
});
