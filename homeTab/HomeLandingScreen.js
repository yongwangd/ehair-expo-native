import { WhiteSpace, List } from 'antd-mobile';
import { connect } from 'react-redux';
import { ExpoLinksView } from '@expo/samples';

import {
  View,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';
import R from 'ramda';
import React from 'react';

import { TagListCmp } from './TagListScreen';
import SocialMediaBox from './SocialMediaBox';
import ContactListContainer from '../searchTab/ContactListContainer';
import WatchListScreen from './WatchListScreen';
import Navigator from '../navigation/Navigator';
import { BLUE } from '../lib/colors';

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
    const { savedProductsCount } = this.props;
    const saveProductHeader = (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          paddingBottom: 9,
          backgroundColor: '#F5F5F9'
        }}
      >
        <Text style={{ color: '#888' }}>Saved Products</Text>
        {savedProductsCount > 0 && (
          <TouchableOpacity
            onPress={() => Navigator.navigate('WatchListScreen')}
          >
            <Text style={{ color: BLUE }}>View All</Text>
          </TouchableOpacity>
        )}
      </View>
    );
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

        <List renderHeader={() => saveProductHeader}>
          <List.Item>
            <WatchListScreen />
          </List.Item>
        </List>

        <WhiteSpace size="lg" />
        <SocialMediaBox />
        <WhiteSpace />
      </ScrollView>
    );
  }
}

export default connect(state => ({
  rootTags: state.tagChunk.tags.filter(tg => !tg.parentTagSet || R.isEmpty(tg)),
  savedProductsCount: Object.keys(state.contactChunk.savedContactKeys).length
}))(HomeLandingScreen);
