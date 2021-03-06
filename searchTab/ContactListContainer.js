import { Card, Flex, WhiteSpace, WingBlank } from 'antd-mobile';

import {
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import { GRAY, GREEN, LIGHTBLACK, NAVY } from '../lib/colors';
import { CONTACT_LIST_IMAGE_HEIGHT } from '../lib/screenProps';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { connect } from 'react-redux';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import { searchFilteredContactsSelector } from '../selectors/contactSelectors';
import { withNavigation } from 'react-navigation';
import R from 'ramda';

const styles = {
  contactItem: {}
};

const ContactItem = props => {
  const { contact, onContactClick, boxShadow = false, ...rest } = props;
  const { name, downloadURL, images, length, comment, inStock } = contact;

  let flexStyle = {
    backgroundColor: 'white',
    marginLeft: 6,
    marginRight: 16,
    paddingRight: 6
  };
  if (boxShadow) {
    flexStyle = {
      ...flexStyle,
      borderRadius: 10,
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { height: 0, width: 0 }
    };
  }

  return (
    <TouchableOpacity onPress={() => onContactClick(contact)}>
      <Flex style={flexStyle}>
        <View>
          <Image
            resizeMode="contain"
            style={{
              width: CONTACT_LIST_IMAGE_HEIGHT,
              height: CONTACT_LIST_IMAGE_HEIGHT
            }}
            defaultSource={require('../assets/images/image-placeholder.png')}
            source={{
              uri:
                (images && `http:${images[0]}`) ||
                // 'https://facebook.github.io/react-native/docs/assets/favicon.png'
                'http://studiotran.com/wp-content/themes/crowd/images/noimage_2.gif'
            }}
          />
        </View>
        <Flex.Item style={{ marginLeft: 20 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              fontFamily: 'open-sans'
            }}
            numberOfLines={1}
          >
            {name}
          </Text>
          <WhiteSpace size="xs" />
          <Text
            style={{
              fontSize: 12,
              color: 'gray'
            }}
            numberOfLines={2}
          >
            {comment}
          </Text>
          <WhiteSpace size="lg" />
          <TouchableHighlight
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          >
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
                size={16}
                color={inStock ? GREEN : GRAY}
              />
              <Text
                style={{
                  color: inStock ? GREEN : GRAY,
                  marginLeft: 8,
                  fontSize: 12
                }}
              >
                {inStock ? 'In Stock' : 'Sold Out'}
              </Text>
            </View>
          </TouchableHighlight>
        </Flex.Item>
      </Flex>
      <WhiteSpace />
    </TouchableOpacity>
  );
};

class ContactItemList extends React.Component {
  state = {
    visible: 10,
    perPage: 10
  };
  render() {
    const { visible, perPage } = this.state;
    const { contacts, onContactClick, ...rest } = this.props;
    const visibleContacts = contacts.slice(0, visible);
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: 'open-sans', color: NAVY, padding: 6 }}>
          {contacts.length} Products
        </Text>
        <FlatList
          {...rest}
          data={visibleContacts}
          keyExtractor={ct => ct._id}
          onEndReached={() => {
            this.setState({ visible: visible + perPage });
          }}
          renderItem={ct => (
            <ContactItem
              {...rest}
              key={ct._id}
              onContactClick={onContactClick}
              contact={ct.item}
            />
          )}
        />
        
      </View>
    );
  }
}

class ContactListContainer extends React.Component {
  render() {
    const { contacts, onContactClick, ...rest } = this.props;
    return (
      <ContactItemList
        {...rest}
        contacts={contacts}
        onContactClick={onContactClick}
      />
    );
  }
}

const mapProps = (state, ownProps) => {
  console.log(ownProps, 'ownprops');
  return {
    contacts: ownProps.contacts || searchFilteredContactsSelector(state),
    onContactClick:
      ownProps.onContactClick ||
      (contact =>
        ownProps.navigation.navigate('ContactDetailScreen', {
          contactId: contact._id,
          title: contact.name
        }))
  };
};

export default R.compose(withNavigation, connect(mapProps))(
  ContactListContainer
);
