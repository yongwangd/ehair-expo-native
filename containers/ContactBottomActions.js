import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modal, List } from 'antd-mobile';

export default class AddToCart extends React.Component {
  state = {
    styleVisible: false,
    quantityVisible: false,
    data: {}
  };
  render() {
    const { length, onSubmit, onCancel } = this.props;
    const { styleVisible, quantityVisible, data } = this.state;
    return (
      <View>
        <Text>Hello</Text>
        {styleVisible && (
          <Modal popup visible={styleVisible} animationType="slide-up">
            <List renderHeader={() => 'Please Select a Style'}>
              {length.map(len => (
                <List.Item key={len.label}>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        data: {
                          ...data,
                          style: len
                        },
                        styleVisible: false,
                        quantityVisible: true
                      })
                    }
                  >
                    <Text>{len.label}</Text>
                  </TouchableOpacity>
                </List.Item>
              ))}
            </List>
          </Modal>
        )}
        {quantityVisible && (
          <Modal popup visible={quantityVisible} animationType="slide-up">
            <List renderHeader={() => 'Please Select Quantity'}>
              {[1, 2, 3, 4, 5].map(quantity => (
                <List.Item key={quantity}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ data: { ...data, quantity } });
                      onSubmit({ ...data, quantity });
                    }}
                  >
                    <Text>{quantity}</Text>
                  </TouchableOpacity>
                </List.Item>
              ))}
            </List>
          </Modal>
        )}
      </View>
    );
  }
}
