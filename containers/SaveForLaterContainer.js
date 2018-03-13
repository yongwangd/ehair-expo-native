import { View, ActionSheet, Button, Text } from 'antd-mobile';
import React from 'react';
import { connect } from 'react-redux';
import { ActionSheetButton } from '../components/ActionSheetButton';

class SaveForLaterContainer extends React.Component {
  state = {
    optionConfig: [
      {
        title: 'View Saved List',
        callback: () => {
          console.log('view list click');
          this.props.viewSavedList();
        }
      },
      {
        title: 'Remove from Saved List',
        isDestructive: true,
        callback: () => {
          console.log('remove from list click');
          this.props.unsaveContact();
        }
      },
      {
        title: 'Cancel',
        isCancel: true,
        callback: () => console.log('Cancel clicked')
      }
    ]
  };

  renderSaveButton = () => {
    const { saved, saveContact } = this.props;
    const { optionConfig } = this.state;
    if (saved) {
      return (
        <ActionSheetButton
          optionConfig={optionConfig}
          message="Pick an Action"
          buttonText="Save for Later"
          type="primary"
        />
      );
    }
    return (
      <Button type="primary" onClick={saveContact}>
        <Text>Save for Later</Text>
      </Button>
    );
  };
  render() {
    return <View>{this.renderSaveButton()}</View>;
  }
}

export default SaveForLaterContainer;
