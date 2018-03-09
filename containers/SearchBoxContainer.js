import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import R from 'ramda';
import React from 'react';
import { connect } from 'react-redux';
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
      onCancel = R.T
    } = this.props;
    const { focused } = this.state;
    return (
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <TextInput
          value={value}
          ref={ref => (this.inputRef = ref)}
          style={{ flex: 1, height: 20, borderColor: 'black', borderWidth: 1 }}
          placeholder={placeholder}
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          onChangeText={e => onChangeText(e)}
          onSubmitEditing={() => onSubmitEditting()}
          blurOnSubmit
        />
        {focused && (
          <TouchableOpacity
            onPress={e => {
              onCancel();
              this.setState({ focused: false });
              this.inputRef.blur();
            }}
          >
            <Text>Cancel</Text>
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
    const { onChangeText, onSubmitEditting, onCancel } = this;
    return (
      <SearchBox
        value={valueEditting}
        {...{ onCancel, onSubmitEditting, onChangeText, ...rest }}
      />
    );
  }
}

const mapProps = state => ({
  value: state.contactChunk.searchText
});
const mapDispatch = dispatch => ({
  onSubmit: text => dispatch(updateContactSearch(text))
});

export default connect(mapProps, mapDispatch)(SearchBoxContainer);
