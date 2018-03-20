import { WhiteSpace, List } from 'antd-mobile';
import { Linking } from 'react-native';
import { connect } from 'react-redux';
import { ExpoLinksView } from '@expo/samples';
import { Marker, MapView } from 'expo';
import Expo from 'expo';

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
import R, { view } from 'ramda';
import React from 'react';

import { TagListCmp } from './TagListScreen';
import SocialMediaBox from './SocialMediaBox';
import ContactListContainer from '../searchTab/ContactListContainer';
import WatchListScreen from './WatchListScreen';
import Navigator from '../navigation/Navigator';
import { BLUE, LINKBLUE } from '../lib/colors';
import TitleContent from '../components/TitleContent';
import Ionicons from '@expo/vector-icons/Ionicons';
import { makeReducer } from '../lib/reduxUtil';
import { getFirebase } from '../store/fireConnection';

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    // backgroundColor: '#fff',
    backgroundColor: '#F5F5F9'
  }
});

class HomeLandingScreen extends React.Component {
  onTagItemClick = tag => {
    const { navigation } = this.props;
    console.log('tag clicked', tag);
    navigation.navigate('TagListScreen', { parentTag: tag, title: tag.label });
  };

  openMap = address => {
    console.log('opening map');
    Linking.openURL('http://maps.apple.com/maps?daddr=');
  };

  signInWithFB = () => {
    Expo.Facebook.logInWithReadPermissionsAsync('155795775109304', {
      permissions: ['public_profile']
    }).then(res => {
      console.log(res);
    });
  };

  render() {
    const { openMap } = this;
    const { savedProductsCount } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <Button
            onPress={this.signInWithFB}
            title="signin with FB
          "
          />
          <Image
            source={require('../assets/images/ehair-logo.png')}
            style={{ width: '100%', height: 70 }}
            resizeMode="contain"
          />
          <View style={{ paddingTop: 30 }} />
          {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links *
        <ExpoLinksView />
          <Button
            onPress={() => this.props.navigation.navigate('WatchListScreen')}
            title="Watch List"
          >
            <Text>Watch List</Text>
          </Button>
        */}
          <TagListCmp
            boxShadow={false}
            onTagClick={this.onTagItemClick}
            tags={this.props.rootTags}
          />
          <WhiteSpace size="lg" />
          <TitleContent
            title="Watch List"
            extra={
              savedProductsCount > 0 && (
                <TouchableOpacity
                  onPress={() => Navigator.navigate('WatchListScreen')}
                >
                  <Text style={{ color: BLUE }}>View All</Text>
                </TouchableOpacity>
              )
            }
          >
            <WatchListScreen />
          </TitleContent>

          <WhiteSpace size="lg" />
          <SocialMediaBox />
          <WhiteSpace size="lg" />

          <TitleContent title="Contact US" contentStyle={{ padding: 0 }}>
            <View>
              <View style={{ padding: 6 }} />
              <List.Item
                thumb={
                  <Ionicons
                    size={25}
                    style={{ marginRight: 20 }}
                    name="ios-time-outline"
                  />
                }
              >
                <Text>09:30 AM - 06:00 PM EST (Monday - Friday)</Text>
                <Text>10:00 AM - 04:00 PM EST (Saturday) </Text>
                <Text>Sunday Closed</Text>
              </List.Item>
              <List.Item
                thumb={
                  <Ionicons
                    size={25}
                    style={{ marginRight: 20 }}
                    name="ios-call-outline"
                  />
                }
              >
                <TouchableOpacity
                  onPress={() => Linking.openURL('tel:+17702850409')}
                >
                  <Text style={{ color: LINKBLUE }}>(770) 285-0409</Text>
                </TouchableOpacity>
                <WhiteSpace />
                <TouchableOpacity
                  onPress={() => Linking.openURL('tel:+17706625177')}
                >
                  <Text style={{ color: LINKBLUE }}>(770) 662-5177</Text>
                </TouchableOpacity>
              </List.Item>
              <List.Item
                thumb={
                  <Ionicons
                    size={25}
                    style={{ marginRight: 20 }}
                    name="ios-pin-outline"
                  />
                }
              >
                <TouchableOpacity onPress={openMap}>
                  <Text style={{ paddingBottom: 8, color: LINKBLUE }}>
                    6185 A Jimmy Carter Blvd, Ste A, Norcross, GA 30071
                  </Text>
                </TouchableOpacity>
              </List.Item>
              {/*   <MapView
                style={{ flex: 1, height: 300 }}
                initialRegion={{
                  //   latitude: 33.926743,
                  //   longitude: -84.217847,
                  //   latitudeDelta: 0.0922,
                  //   longitudeDelta: 0.0421
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
            /> */}
            </View>
          </TitleContent>
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
        </ScrollView>
      </View>
    );
  }
}

export default connect(state => ({
  rootTags: state.tagChunk.tags.filter(tg => !tg.parentTagSet || R.isEmpty(tg)),
  savedProductsCount: Object.keys(state.contactChunk.savedContactKeys).length
}))(HomeLandingScreen);
