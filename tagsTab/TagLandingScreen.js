import { Button, ImagePicker } from 'antd-mobile';
import { FlatList, Image, ScrollView, StyleSheet, Text } from 'react-native';

import { ExpoLinksView } from '@expo/samples';
import R from 'ramda';
import React from 'react';
import { TagListCmp } from './TagListScreen';
import { connect } from 'react-redux';
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
        <Image
          source={require('../assets/images/ehair-logo.png')}
          style={{ width: '100%', height: 70 }}
          resizeMode="contain"
        />
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
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
