import React from 'react';
import R from 'ramda';
import { ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { ExpoLinksView } from '@expo/samples';

import { Button } from 'antd-mobile';
import { TagListCmp } from './TagListScreen';

import { isEmpty } from 'ramda';

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});

class TagLandingScreen extends React.Component {
  onTagItemClick = tag => {
    const { navigation } = this.props;
    console.log('tag clicked', tag);
    navigation.navigate('TagListScreen', { parentTag: tag, title: tag.label });
  };

  render() {
    console.log(this.props.navigation);
    console.log('tags, props', this.props);
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
        <Button>default</Button>
        <FlatList
          data={[{ key: 'a' }, { key: 'c' }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
        <TagListCmp
          onTagClick={this.onTagItemClick}
          tags={this.props.rootTags}
        />
        <FlatList
          data={this.props.contacts}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </ScrollView>
    );
  }
}

export default connect(state => ({
  rootTags: state.tagChunk.tags.filter(tg => !tg.parentTagSet || R.isEmpty(tg))
}))(TagLandingScreen);
