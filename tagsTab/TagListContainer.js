import React from 'react';
import R from 'ramda';
import {
  Container,
  Content,
  List,
  ListItem,
  Right,
  Icon,
  Body,
  Text
} from 'native-base';
import { connect } from 'react-redux';

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
    <List>
      {tags.map(tg => <TagCmp key={tg.key} tag={tg} onTagClick={onTagClick} />)}
    </List>
  );
};

class TagList extends React.Component {
  render() {
    const { tags } = this.props;
    console.log(tags, 'tagsss');
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
  console.log('own props', ownProps);
  if (parentTag) {
    // { tags: state.tags.filter(tg => tg.parentTagSet[parentTag.key]) };

    return {
      tags: state.tagChunk.tags.filter(R.path(['parentTagSet', parentTag.key]))
    };
  }
  return {
    tags: state.tagChunk.tags.filter(
      tg => R.isNil(tg.parentTagSet) || R.isEmpty(tg.parentTagSet)
    )
  };
};

export default connect(mapProps)(TagList);
