import React from 'react';
import {View, Text}} from 'react-native';
import {Modal} from 'antd-mobile';


const ModalWizard = props => {

    const {visible, goBack, showGoBack, children, onSubmit, onCancel } = props;

    return (
        <Modal
            popup
            visible={visible}
            animationType="slide-up"
        >
        
        {children}
        </Modal>    

    )


}