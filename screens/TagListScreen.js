import React from "react";
import R from "ramda";
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
import { connect } from "react-redux";

const TagCmp = props => {
  const { onTagClick, tag, ...rest } = props;
  const { label } = tag;
  return (
    <ListItem {...rest} onPress={() => onTagClick(tag)}>
      <Body>
        <Text>{label}</Text>
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

class TagListDefault extends React.Component {
  //   state = {
  //     tags: [
  //       {
  //         name: "tag first"
  //       },
  //       {
  //         name: "tag second"
  //       }
  //     ]
  //   };
  componentDidMount() {}

  render() {
    const { tags } = this.props;
    console.log(tags, "tagsss");
    return (
      <Container>
        <Content>
          <Text> Tag list CMP</Text>
          <TagListCmp tags={tags} onTagClick={this.props.onTagClick} />
        </Content>
      </Container>
    );
  }
}

const mapProps = (state, ownProps) => {
  const { parentTag } = ownProps;
  if (parentTag) {
    return { tags: state.tags.filter(tg => tg.parentTagSet[parentTag.key]) };
  }
  return {
    tags: state.tags.filter(tg => !tg.parentTagSet || R.isEmpty(tg.parentTagSet))
  };
};

export const TagListContainer = connect(mapProps)(TagListDefault);

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
