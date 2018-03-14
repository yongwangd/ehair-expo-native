import { connect } from 'react-redux';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import R from 'ramda';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { GRAY, BLUE, LIGHTGRAY } from '../lib/colors';
import { updateContactSearch } from '../store/contactsActionReducer';

export class SearchBox extends React.Component {
  state = {
    focused: false
  };
  render() {
    const {
      value = 'hello',
      placeholder = 'Search',
      onSubmitEditting = R.T,
      onChangeText = R.T,
      onCancel = R.T,
      onClearText = R.T
    } = this.props;
    const { focused } = this.state;
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          borderColor: GRAY,
          justifyContent: 'center',
          padding: 8,
          alignItems: 'center'
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: LIGHTGRAY,
            padding: 4,
            borderRadius: 8
          }}
        >
          <Ionicons
            name="ios-search"
            size={20}
            style={{
              color: GRAY,
              marginRight: 11,
              marginLeft: 8
            }}
          />
          <TextInput
            value={value}
            ref={ref => (this.inputRef = ref)}
            style={{ flex: 1 }}
            placeholder={placeholder}
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
            onChangeText={e => onChangeText(e)}
            onSubmitEditing={() => onSubmitEditting()}
            underlineColorAndroid="transparent"
            blurOnSubmit
            selectTextOnFocus
          />
          {value != '' &&
            focused && (
              <Ionicons
                onPress={onClearText}
                name="md-close-circle"
                size={20}
                style={{ color: GRAY, marginRight: 5 }}
              />
            )}
        </View>
        {focused && (
          <TouchableOpacity
            onPress={e => {
              onCancel();
              this.setState({ focused: false });
              this.inputRef.blur();
            }}
          >
            <Text
              style={{
                fontFamily: 'open-sans',
                color: BLUE,
                marginLeft: 10
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

class SearchBoxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueEditting: props.value || ''
    };
  }
  onChangeText = text => {
    console.log('change text called', text);
    this.setState({
      valueEditting: text
    });
  };
  onSubmitEditting = () => {
    const { onSubmit } = this.props;
    const { valueEditting } = this.state;
    console.log('on submit editt', valueEditting);
    onSubmit(valueEditting);
  };
  onClearText = () => {
    this.setState({ valueEditting: '' });
  };
  onCancel = () => {
    this.setState({
      valueEditting: this.props.value
    });
  };
  componentWillReceiveProps(nextProps) {
    if (this.state.valueEditting != nextProps.value) {
      this.setState({
        valueEditting: nextProps.value
      });
    }
  }
  render() {
    const { value, ...rest } = this.props;
    const { valueEditting } = this.state;
    const { onChangeText, onSubmitEditting, onCancel, onClearText } = this;
    return (
      <SearchBox
        value={valueEditting}
        {...{ onCancel, onSubmitEditting, onChangeText, onClearText, ...rest }}
      />
    );
  }
}

const mapProps = state => ({
  value: state.contactChunk.searchText
});
const mapDispatch = (dispatch, ownProps) => ({
  onSubmit: text => {
    dispatch(updateContactSearch(text));
    if (R.is(Function, ownProps.afterSubmit)) {
      ownProps.afterSubmit(text);
    }
  }
});

export default connect(mapProps, mapDispatch)(SearchBoxContainer);
