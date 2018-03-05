import React from "react";
import { ScrollView, StyleSheet, FlatList, Text } from "react-native";
import { connect } from "react-redux";
import { ExpoLinksView } from "@expo/samples";
import { StackNavigator } from "react-navigation";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Right,
  Icon,
  Body,
  Left,
  Button
} from "native-base";
import TagListScreen, { TagListContainer } from "./TagListScreen";

console.disableYellowBox = true;

class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
    // header: null
  };

  onTagItemClick = tag => {
    const { navigation } = this.props;
    console.log("tag clicked", tag);
    navigation.navigate("TagListScreen", { ...tag });
  };

  render() {
    console.log(this.props.navigation);
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
        <FlatList
          data={[{ key: "a" }, { key: "c" }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
        <TagListContainer onTagClick={this.onTagItemClick} />
        <FlatList
          data={this.props.contacts}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

const LinkScreen = connect(state => ({
  contacts: state.contacts
}))(LinksScreen);

const LinkScreenStack = StackNavigator({
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

export default LinkScreenStack;
