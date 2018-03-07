import React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

const ContactDetail = props => {
  const { contact } = props;
  const { name, comment, inStock, length, downloadURL } = contact;

  return (
    <View>
      <Text>Product Detail</Text>
      <Text>{name}</Text>
      <Image
        resizeMode="contain"
        style={{ width: 300, height: 300 }}
        source={{
          uri:
            downloadURL ||
            // 'https://facebook.github.io/react-native/docs/assets/favicon.png'
            'http://studiotran.com/wp-content/themes/crowd/images/noimage_2.gif'
        }}
      />
      <Text>{comment}</Text>
      <Text>{inStock}</Text>
    </View>
  );
};

class ContactDetailScreen extends React.Component {
  render() {
    const { contact } = this.props;
    return <ContactDetail contact={contact} />;
  }
}

const mapProps = (state, ownProps) => {
  const { navigation } = ownProps;
  const { contactId } = navigation.state.params;

  const contact = state.contactChunk.contacts.find(c => c._id == contactId);
  console.log('contact found', contact, ownProps);
  return { contact };
};

export default connect(mapProps)(ContactDetailScreen);
