import React from "react";
import { StackNavigator } from "react-navigation";

import {
  Container,
  Content,
  List,
  ListItem,
  Right,
  Icon,
  Body,
  Text
} from "native-base";

const TagCmp = props => {
  const { onTagClick, tag, ...rest } = props;
  const { name } = tag;
  return (
    <ListItem {...rest} onPress={() => onTagClick(tag)}>
      <Body>
        <Text>{name}</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  );
};

export const TagListCmp = props => {
  const { onTagClick, tags } = props;
  return (
    <List>{tags.map(tg => <TagCmp tag={tg} onTagClick={onTagClick} />)}</List>
  );
};

export class TagListContainer extends React.Component {
  state = {
    tags: [
      {
        name: "tag first"
      },
      {
        name: "tag second"
      }
    ]
  };

  render() {
    return (
      <Container>
        <Content>
          <Text> Tag list CMP</Text>
          <TagListCmp
            tags={this.state.tags}
            onTagClick={this.props.onTagClick}
          />
        </Content>
      </Container>
    );
  }
}

class TagListScreen extends React.Component {
  static navigationOptions = {
    // header: null
  };
  onTagClick = tag => {
    const { navigation } = this.props;
    console.log("tag clicksss", tag);
    navigation.navigate("TagListScreen", { ...tag });
  };
  render() {
    return <TagListContainer onTagClick={this.onTagClick} />;
  }
}

export default TagListScreen;
// export default StackNavigator({
//   TagListScreen: {
//     screen: TagListScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: `${navigation.state.params.name || "No Title pass"}`
//     })
//   }
// });
