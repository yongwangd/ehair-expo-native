import React from "react";
import { ScrollView, StyleSheet, FlatList, Text } from "react-native";
import { connect } from "react-redux";
import { ExpoLinksView } from "@expo/samples";
import { TagListContainer } from "./TagListScreen";

console.disableYellowBox = true;

class LinksScreen extends React.Component {
  onTagItemClick = tag => {
    const { navigation } = this.props;
    console.log("tag clicked", tag);
    navigation.navigate("TagListScreen", { parentTag: tag, title: tag.label });
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
        <TagListContainer onTagClick={this.onTagItemClick} parentTag={null} />
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

export default connect(state => ({
  contacts: state.contacts
}))(LinksScreen);
