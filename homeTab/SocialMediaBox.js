import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';
import { WebBrowser } from 'expo';
import React from 'react';

import { ORANGE, BLUE } from '../lib/colors';

const socialMediaConfig = {
  facebook: {
    logo: 'logo-facebook',
    url: 'https://www.facebook.com/ehairoutlet/'
  },
  twitter: {
    logo: 'logo-twitter',
    url: 'https://twitter.com/eHair_Outlet'
  },
  pinterest: {
    logo: 'logo-pinterest',
    url: 'https://www.pinterest.com/ehairoutlet/'
  },
  youtube: {
    logo: 'logo-youtube',
    url: 'https://www.youtube.com/channel/UCJiiXsR-Shpi9lxLElbguDg'
  },
  googleplus: {
    logo: 'logo-googleplus',
    url: 'https://plus.google.com/u/0/+Ehairoutlet'
  },
  instagram: {
    logo: 'logo-instagram',
    url: 'https://www.instagram.com/ehair_out1et/'
  }
};

const SocialMediaBox = props => (
  <View>
    {Object.values(socialMediaConfig).map(config => (
      <TouchableOpacity
        key={config.logo}
        onPress={() => WebBrowser.openBrowserAsync(config.url)}
      >
        <Ionicons name={config.logo} size={25} style={{ color: BLUE }} />
      </TouchableOpacity>
    ))}

    <TouchableOpacity
      onPress={e =>
        WebBrowser.openBrowserAsync('https://www.facebook.com/ehairoutlet/')
      }
    >
      <Ionicons name="logo-facebook" size={25} style={{ color: BLUE }} />
    </TouchableOpacity>
  </View>
);

export default SocialMediaBox;
