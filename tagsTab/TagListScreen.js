import { Button, ScrollView, Text, View } from 'react-native';

import { List } from 'antd-mobile';
import R from 'ramda';
import React from 'react';
import { connect } from 'react-redux';

export const TagListCmp = props => {
  const { tags, onTagClick } = props;
  return (
    <List renderHeader={() => 'Categories'}>
      {tags.map(tg => (
        <List.Item
          key={tg.key}
          arrow="horizontal"
          onClick={() => onTagClick(tg)}
        >
          {tg.label}
        </List.Item>
      ))}
    </List>
  );
};

class TagListScreen extends React.Component {
  onTagClick = tag => {
    const { navigation } = this.props;
    console.log('tag clicksss', tag);
    navigation.navigate('TagContactsScreen', { tag });
  };
  render() {
    const { tags } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <TagListCmp onTagClick={this.onTagClick} tags={tags} />
        </ScrollView>
      </View>
    );
  }
}

const mapProps = (state, ownProps) => {
  //   const { parentTag } = ownProps;

  const parentTag = R.path(
    ['navigation', 'state', 'params', 'parentTag'],
    ownProps
  );

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
    ),
    parentTag
  };
};

export default connect(mapProps)(TagListScreen);
