import { Ionicons } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { WebBrowser } from 'expo';
import { List, WhiteSpace, ListView } from 'antd-mobile';
import React from 'react';

import { ORANGE, BLUE, LINKBLUE } from '../lib/colors';
import TitleContent from '../components/TitleContent';

const socialMediaConfig = {
  facebook: {
    logo: 'facebook',
    image: require('../assets/images/social/facebook.png'),
    url: 'https://www.facebook.com/ehairoutlet/'
  },
  twitter: {
    logo: 'twitter',
    image: require('../assets/images/social/twitter.png'),
    url: 'https://twitter.com/eHair_Outlet'
  },
  pinterest: {
    logo: 'pinterest',
    image: require('../assets/images/social/pinterest.png'),
    url: 'https://www.pinterest.com/ehairoutlet/'
  },
  youtube: {
    logo: 'youtube',
    image: require('../assets/images/social/youtube.png'),
    url: 'https://www.youtube.com/channel/UCJiiXsR-Shpi9lxLElbguDg'
  },
  googleplus: {
    logo: 'googleplus',
    image: require('../assets/images/social/googleplus.png'),
    url: 'https://plus.google.com/u/0/+Ehairoutlet'
  },
  instagram: {
    logo: 'instagram',
    image: require('../assets/images/social/instagram.png'),
    url: 'https://www.instagram.com/ehair_out1et/'
  }
};

const SocialMediaBox = props => (
  <TitleContent title="Resources">
    <View style={{ paddingVertical: 5, paddingHorizontal: 15 }}>
      <TouchableOpacity>
        <Text
          style={{ fontSize: 16, fontFamily: 'open-sans', color: LINKBLUE }}
        >
          Ehair Office Website
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        {Object.values(socialMediaConfig).map(config => (
          <TouchableOpacity
            onPress={() => WebBrowser.openBrowserAsync(config.url)}
          >
            <Image
              source={config.image}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </TitleContent>
);

export default SocialMediaBox;
