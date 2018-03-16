import React from 'react';
import { View, Text } from 'react-native';
import { WHITE } from '../lib/colors';

const TitleContent = props => {
  const { title, extra, style = {}, contentStyle = {}, children } = props;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          paddingBottom: 9,
          backgroundColor: '#F5F5F9',
          ...style
        }}
      >
        {title && <Text style={{ color: '#888' }}>{title}</Text>}
        {extra}
      </View>
      <View
        style={{
          borderRadius: 6,
          shadowRadius: 6,
          shadowOpacity: 0.3,
          shadowColor: 'gray',
          shadowOffset: { height: 0, width: 0 },
          marginLeft: 8,
          marginRight: 8,
          backgroundColor: WHITE,
          padding: 8,
          ...contentStyle
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default TitleContent;
