import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import { BLUE } from '../lib/colors';

const BackToHomeButton = props => {
  const { navigation } = props;
  return (
    <TouchableOpacity onPress={() => navigation.popToTop()}>
      <Ionicons
        name="ios-home"
        size={25}
        style={{ marginRight: 15, color: BLUE }}
      />
    </TouchableOpacity>
  );
};

export default withNavigation(BackToHomeButton);
