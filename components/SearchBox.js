import React from 'react';
import { TextInput, Text, View } from 'react-native';

export class SearchBox extends React.Component {
  state = {
    active: false,
    placeholderText: 'search inactive'
  };
  componentDidMount() {}
  render() {
    const { active, placeholderText } = this.state;
    const { value = 'hello', onSubmitEditting, onChangeText } = this.props;
    console.log(this.inputRef && this.inputRef.isFocused());
    return (
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <TextInput
          value={value}
          ref={ref => (this.inputRef = ref)}
          style={{ flex: 1, height: 20, borderColor: 'black', borderWidth: 1 }}
          placeholder={placeholderText}
          onFocus={() =>
            this.setState({ active: true, placeholderText: 'active' })
          }
          onChangeText={onChangeText}
          onSubmitEditing={e => {
            console.log('submitEditting', e);
            onSubmitEditting();
            this.setState({
              active: false
            });
          }}
          blurOnSubmit
        />
        {active && <Text>Cancel</Text>}
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
  onChangeText = text =>
    this.setState({
      valueEditting: text
    });
  onSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { valueEditting } = this.state;
    onSubmit(valueEditting);
  };
  render() {
    const { valueEditting } = this.state;
    const { onChangeText } = this.props;
    return (
      <SearchBox
        value={valueEditting}
        onChangeText={onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
    );
  }
}
export default SearchBoxContainer;
