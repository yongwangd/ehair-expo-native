import { WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';
import { ExpoLinksView } from '@expo/samples';

import {
  View,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import R from 'ramda';
import React from 'react';

import { TagListCmp } from './TagListScreen';
import SocialMediaBox from './SocialMediaBox';

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    fontFamily: 'open-sans'
  }
});

class HomeLandingScreen extends React.Component {
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
        <View style={{ paddingTop: 30 }} />
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links *
        <ExpoLinksView />
        */}
        <Button
          onPress={() => this.props.navigation.navigate('WatchListScreen')}
          title="Watch List"
        >
          <Text>Watch List</Text>
        </Button>
        <TagListCmp
          onTagClick={this.onTagItemClick}
          tags={this.props.rootTags}
        />
        <WhiteSpace size="lg" />

        <WhiteSpace size="lg" />
        <SocialMediaBox />
        <WhiteSpace />
      </ScrollView>
    );
  }
}

export default connect(state => ({
  rootTags: state.tagChunk.tags.filter(tg => !tg.parentTagSet || R.isEmpty(tg))
}))(HomeLandingScreen);
