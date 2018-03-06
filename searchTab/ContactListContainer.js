import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { Card, Flex, WhiteSpace, WingBlank } from 'antd-mobile';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: "McDonald's invites you",
    des: '不是所有的兼职汪都需要风吹日晒'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒'
  }
];

const styles = {
  contactItem: {}
};

const ContactItem = props => {
  const { name, length, comment, inStock, ...rest } = props;

  return (
    <View>
      <WhiteSpace />
      <WingBlank />
      <Flex style={{ backgroundColor: 'white', padding: 4 }}>
        <View style={{ width: '32%' }}>
          <Image
            source={{
              uri:
                'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
            }}
            style={{ maxWidth: '100%' }}
          />
        </View>
        <Flex.Item style={{}}>
          <Text>Second column</Text>
        </Flex.Item>
      </Flex>
      <WingBlank />
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
