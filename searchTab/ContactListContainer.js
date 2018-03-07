import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Card, Flex, WhiteSpace, WingBlank } from 'antd-mobile';
import { Ionicons } from '@expo/vector-icons';

const styles = {
  contactItem: {}
};

const ContactItem = props => {
  const { name, downloadURL, length, comment, inStock, ...rest } = props;

  return (
    <TouchableOpacity>
      <Flex
        style={{ backgroundColor: 'white', marginLeft: 6, marginRight: 16 }}
      >
        <View>
          <Image
            resizeMode="contain"
            style={{ width: 100, height: 100 }}
            source={{
              uri:
                downloadURL ||
                // 'https://facebook.github.io/react-native/docs/assets/favicon.png'
                'http://studiotran.com/wp-content/themes/crowd/images/noimage_2.gif'
            }}
          />
        </View>
        <Flex.Item style={{ marginLeft: 20 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14
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
            {(Math.random() > 0.5 && [
              <Ionicons name="md-checkmark-circle" size={17} color="green" />,
              <Text style={{ color: 'green', marginLeft: 8, fontSize: 11 }}>
                In Stock
              </Text>
            ]) || [
              <Ionicons
                name="md-checkmark-circle"
                size={17}
                color="lightgray"
              />,
              <Text style={{ color: 'gray', marginLeft: 8, fontSize: 11 }}>
                Out of Stock
              </Text>
            ]}
          </TouchableOpacity>
        </Flex.Item>
      </Flex>
      <WhiteSpace />
    </TouchableOpacity>
  );
};

const ContactItemList = props => {
  const { contacts, ...rest } = props;
  return (
    <View style={{ flex: 1 }}>
      <Text>{contacts.length} Products</Text>
      <FlatList
        {...rest}
        data={contacts}
        keyExtractor={ct => ct._id}
        renderItem={ct => <ContactItem key={ct._id} {...ct.item} />}
      />
    </View>
  );
};
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
    const { contacts, ...rest } = this.props;

    return <ContactItemList contacts={contacts} {...rest} />;
  }
}

const mapProps = state => ({
  contacts: state.contactChunk.contacts
});

export default connect(mapProps)(ContactListContainer);
