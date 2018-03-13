import {
  ActionSheet,
  WhiteSpace,
  Carousel,
  Badge,
  Tag,
  Button,
  Toast
} from 'antd-mobile';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

import { CONTACT_DETAIL_IMAGE_HEIGHT } from '../lib/screenProps';
import { GRAY, NAVY, LIGHTBLACK, GREEN } from '../lib/colors';
import { saveContact, unsaveContact } from '../store/contactsActionReducer';
import { contactsSelector } from '../selectors/contactSelectors';
import SaveForLaterContainer, {
  SaveForLaterButton
} from '../containers/SaveForLaterContainer';

const ContactDetail = props => {
  console.log('detail props', props);
  const { contact, saveContact, unsaveContact } = props;
  const {
    name,
    images,
    spec,
    comment,
    subtitle,
    inStock,
    length,
    saved = false,
    downloadURL,
    ehairKey
  } = contact;

  console.log(contact);

  const renderLengthItem = len => {
    const { label, available } = len;
    if (available) {
      return (
        <Tag
          key={len.label}
          selected
          style={{
            padding: 6,
            borderColor: '#108ee9'
          }}
        >
          <Text style={{ color: '#108ee9' }}>{len.label}</Text>
        </Tag>
      );
    }
    return (
      <Badge key={len.label} text="">
        <Tag disabled style={{ padding: 6 }}>
          <Text>{len.label}</Text>
        </Tag>
      </Badge>
    );
  };

  const renderStockElm = () => (
    <View
      style={{
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Ionicons
        name={inStock ? 'md-checkmark-circle' : 'md-close-circle'}
        size={18}
        color={inStock ? GREEN : LIGHTBLACK}
      />
      <Text
        style={{
          color: inStock ? GREEN : LIGHTBLACK,
          marginLeft: 8,
          fontSize: 14,
          fontWeight: 'bold'
        }}
      >
        {inStock ? 'In Stock' : 'Sold Out'}
      </Text>
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
        flex: 1,
        paddingBottom: 17,
        paddingTop: 15
      }}
    >
      <ScrollView>
        <Text
          style={{ fontFamily: 'open-sans', fontSize: 20, marginBottom: 10 }}
        >
          {name}
        </Text>
        <Carousel infinite>
          {images.map(img => (
            <Image
              key={img}
              resizeMode="contain"
              style={{ width: '100%', height: CONTACT_DETAIL_IMAGE_HEIGHT }}
              source={{
                uri:
                  `http:${img}` ||
                  // 'https://facebook.github.io/react-native/docs/assets/favicon.png'
                  'http://studiotran.com/wp-content/themes/crowd/images/noimage_2.gif'
              }}
            />
          ))}
        </Carousel>

        {renderStockElm()}

        {length &&
          length.length > 0 && (
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: 'open-sans', color: GRAY }}>
                Availability:
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap'
                }}
              >
                {length.map(renderLengthItem)}
              </View>
            </View>
          )}

        {subtitle != null && (
          <Text style={{ color: NAVY, fontSize: 18, marginTop: 10 }}>
            {subtitle}
          </Text>
        )}
        {comment != null && (
          <Text style={{ color: LIGHTBLACK, marginTop: 8 }}>{comment}</Text>
        )}
        <Text>{inStock}</Text>

        {spec &&
          spec.length > 0 && (
            <View style={{ marginBottom: 8 }}>
              <Text
                style={{
                  color: NAVY,
                  fontSize: 18,
                  fontFamily: 'open-sans',
                  marginBottom: 8
                }}
              >
                Product Features
              </Text>
              {spec.map(sp => (
                <View
                  key={sp}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <FontAwesome name="circle" size={13} color={GRAY} />
                  <Text
                    key={sp}
                    style={{ color: LIGHTBLACK, marginTop: 3, marginLeft: 11 }}
                  >
                    {sp.replace(/(\r\n\t|\n|\r\t)/gm, '')}
                  </Text>
                </View>
              ))}
              <WhiteSpace />
              <SaveForLaterContainer
                unsaveContact={() => unsaveContact(ehairKey)}
                saveContact={() => saveContact(ehairKey)}
                saved={saved}
              />
            </View>
          )}
      </ScrollView>
    </View>
  );
};

class ContactDetailScreen extends React.Component {
  render() {
    return <ContactDetail {...this.props} />;
  }
}

const mapProps = (state, ownProps) => {
  const { navigation } = ownProps;
  const { contactId } = navigation.state.params;

  const contact = contactsSelector(state).find(c => c._id == contactId);
  console.log('contact found', contact, ownProps);
  return { contact };
};

const mapDispatch = dispatch => ({
  saveContact: contactId => {
    Toast.loading('Processing...', 0.5);
    dispatch(saveContact(contactId));
  },
  unsaveContact: contactId => {
    Toast.loading('Processing...', 0.5);
    dispatch(unsaveContact(contactId));
  }
});

export default connect(mapProps, mapDispatch)(ContactDetailScreen);
