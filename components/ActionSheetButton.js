import { ActionSheet, Button } from 'antd-mobile';
import { Text, View } from 'react-native';
import R from 'ramda';
import React from 'react';

export const ActionSheetButton = props => {
  const {
    optionConfig,
    message,
    buttonText,
    type = 'primary',
    ...rest
  } = props;
  const titles = R.map(R.prop('title'), optionConfig);
  const cancelButtonIndex = R.findIndex(
    R.propEq('isCancel', true),
    optionConfig
  );
  const destructiveButtonIndex = R.findIndex(
    R.propEq('isDestructive', true),
    optionConfig
  );

  const openActionSheet = () => {
    ActionSheet.showActionSheetWithOptions(
      {
        options: titles,
        cancelButtonIndex,
        destructiveButtonIndex,
        message
      },
      buttonIndex => {
        console.log('button Index clicked', buttonIndex);
        if (R.is(Function, optionConfig[buttonIndex].callback)) {
          optionConfig[buttonIndex].callback();
        }
      }
    );
  };

  return (
    <Button type={type} {...rest} onClick={openActionSheet}>
      <Text>{buttonText}</Text>
    </Button>
  );
};
