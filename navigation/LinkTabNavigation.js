import { StackNavigator } from "react-navigation";
import LinkScreen from "../screens/LinksScreen";
import TagListScreen from "../screens/TagListScreen";

export default StackNavigator({
  LinkScreen: {
    screen: LinkScreen
  },
  TagListScreen: {
    screen: TagListScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name || "No Title pass"}`,
      headerBackTitle: "Back"
    })
  }
});
