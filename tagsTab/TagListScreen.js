import React from 'react';
import R from 'ramda';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';

const TagCmp = props => {
  const { onTagClick, tag, ...rest } = props;
  const { label } = tag;
  return <Button {...rest} onPress={() => onTagClick(tag)} title={label} />;
};

export const TagListCmp = props => {
  const { onTagClick, tags } = props;
  return (
    <View>
      {tags.map(tg => <TagCmp key={tg.key} tag={tg} onTagClick={onTagClick} />)}
    </View>
  );
};

class TagListScreen extends React.Component {
  constructor(props) {
    super(props);
    const { tags } = this.props;
    if (!tags || tags.length == 0) {
      this.props.navigation.pop();
      this.props.navigation.navigate('TagContactsScreen');
    }
  }
  onTagClick = tag => {
    const { navigation } = this.props;
    console.log('tag clicksss', tag);
    navigation.navigate('TagListScreen', { parentTag: tag, title: tag.label });
  };
  render() {
    const { tags } = this.props;
    return <TagListCmp onTagClick={this.onTagClick} tags={tags} />;
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
