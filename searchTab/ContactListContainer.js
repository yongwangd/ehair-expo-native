import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { Card, Flex, WhiteSpace, WingBlank } from 'antd-mobile';
import { Ionicons } from '@expo/vector-icons';

const styles = {
  contactItem: {}
};

const ContactItem = props => {
  const { name, length, comment, inStock, ...rest } = props;

  return (
    <View>
      <WhiteSpace />
      <Flex style={{ backgroundColor: 'white', padding: 2 }}>
        <View style={{ width: '32%' }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri:
                'https://facebook.github.io/react-native/docs/assets/favicon.png'
            }}
          />
        </View>
        <Flex.Item style={{}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14
            }}
          >
            {name}
          </Text>
          <WhiteSpace size="xs" />
          <Text
            style={{
              fontSize: 12,
              color: 'gray'
            }}
          >
            {comment}
          </Text>
          <WhiteSpace size="lg" />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          >
            {(Math.random() > 0.5 && [
              <Ionicons name="md-checkmark-circle" size={17} color="green" />,
              <Text>In Stock</Text>
            ]) || [
              <Ionicons
                name="md-checkmark-circle"
                size={17}
                color="lightgray"
              />,
              <Text style={{ color: 'gray' }}>Out of Stock</Text>
            ]}
          </View>
        </Flex.Item>
      </Flex>
      <WhiteSpace />
    </View>
  );

  //   return (
  //     <Card {...rest}>
  //       <Card.Header
  //         title={name || 'No Title'}
  //         thumb="https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg"
  //         extra="My Extra"
  //       />
  //       <Card.Body>
  //         <Text>Body</Text>
  //       </Card.Body>
  //       <Card.Footer content="Footer" extra="Footer Extra" />
  //     </Card>
  //   );
};

const ContactItemList = props => {
  const { contacts, ...rest } = props;
  return (
    <View {...rest}>
      {contacts.map(ct => <ContactItem key={ct._id} {...ct} />)}
    </View>
  );
};

class ContactListContainer extends React.Component {
  render() {
    const { contacts } = this.props;

    return <ContactItemList contacts={contacts} />;
  }
}

const mapProps = state => ({
  contacts: state.contactChunk.contacts
});

export default connect(mapProps)(ContactListContainer);
