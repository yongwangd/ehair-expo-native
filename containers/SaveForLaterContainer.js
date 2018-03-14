import { connect } from 'react-redux';
import { View, ActionSheet, Button, Text } from 'antd-mobile';
import { withNavigation } from 'react-navigation';
import React from 'react';

import { ActionSheetButton } from '../components/ActionSheetButton';

class SaveForLaterContainer extends React.Component {
  state = {
    optionConfig: [
      {
        title: 'View Watched Products',
        callback: () => {
          console.log('view list click');
          this.props.navigation.navigate('WatchListScreen');
        }
      },
      {
        title: 'Remove from Watch List',
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
          buttonText="Saved to Watch List"
          type="default"
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

export default withNavigation(SaveForLaterContainer);
