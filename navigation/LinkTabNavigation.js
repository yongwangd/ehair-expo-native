import { StackNavigator } from "react-navigation";
import LinkScreen from "../screens/LinksScreen";
import TagListScreen from "../screens/TagListScreen";

export default StackNavigator({
  LinkScreen: {
    screen: LinkScreen,
    navigationOptions: {
      title: "EHair Inventory"
    }
  },
  TagListScreen: {
    screen: TagListScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title || "No Title pass"}`,
      headerBackTitle: "Back"
    })
  }
});
