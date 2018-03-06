import React from 'react';
import R from 'ramda';
import TagListContainer from './TagListContainer';

class TagListScreen extends React.Component {
  static navigationOptions = {
    // header: null
  };
  onTagClick = tag => {
    const { navigation } = this.props;
    console.log('tag clicksss', tag);
    navigation.navigate('TagListScreen', { parentTag: tag, title: tag.label });
  };
  render() {
    //   const {parentTag } = this.props.navigation
    const parentTag = R.path(
      ['props', 'navigation', 'state', 'params', 'parentTag'],
      this
    );

    console.log(this.props.navigation, 'nav', parentTag);
    return (
      <TagListContainer onTagClick={this.onTagClick} parentTag={parentTag} />
    );
  }
}

export default TagListScreen;
