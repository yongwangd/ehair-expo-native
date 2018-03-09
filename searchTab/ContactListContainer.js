import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Card, Flex, WhiteSpace, WingBlank } from 'antd-mobile';
import { Ionicons } from '@expo/vector-icons';
import { GREEN, GRAY } from '../lib/colors';
import { CONTACT_LIST_IMAGE_HEIGHT } from '../lib/screenProps';

const styles = {
  contactItem: {}
};

const ContactItem = props => {
  const { contact, onContactClick, ...rest } = props;
  const { name, downloadURL, images, length, comment, inStock } = contact;

  return (
    <TouchableOpacity onPress={() => onContactClick(contact)}>
      <Flex
        style={{ backgroundColor: 'white', marginLeft: 6, marginRight: 16 }}
      >
        <View>
          <Image
            resizeMode="contain"
            style={{
              width: CONTACT_LIST_IMAGE_HEIGHT,
              height: CONTACT_LIST_IMAGE_HEIGHT
            }}
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
          <TouchableOpacity
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
          </TouchableOpacity>
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
        <Text>{contacts.length} Products</Text>
        <FlatList
          {...rest}
          data={visibleContacts}
          keyExtractor={ct => ct._id}
          onEndReached={() => {
            this.setState({ visible: visible + perPage });
          }}
          renderItem={ct => (
            <ContactItem
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

// const ContactItemList = props => {
//   const { contacts, onContactClick, ...rest } = props;
//   return (
//     <View style={{ flex: 1 }}>
//       <Text>{contacts.length} Products</Text>
//       <FlatList
//         {...rest}
//         data={contacts}
//         keyExtractor={ct => ct._id}
//         renderItem={ct => (
//           <ContactItem
//             key={ct._id}
//             onContactClick={onContactClick}
//             contact={ct.item}
//           />
//         )}
//       />
//     </View>
//   );
// };

// const ContactItemList = props => {
//   const { contacts, ...rest } = props;
//   return (
//     <View {...rest}>
//       {contacts.map(ct => <ContactItem key={ct._id} {...ct} />)}
//     </View>
//   );
// };

class ContactListContainer extends React.Component {
  render() {
    const { contacts, onContactClick, ...rest } = this.props;

    return (
      <ContactItemList
        contacts={contacts}
        onContactClick={onContactClick}
        {...rest}
      />
    );
  }
}

const mapProps = (state, ownProps) => ({
  contacts: ownProps.contacts || state.contactChunk.contacts
});

export default connect(mapProps)(ContactListContainer);
