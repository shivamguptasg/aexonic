import React, {useContext} from 'react';
import {ActivityIndicator, View, Modal} from 'react-native';
import AppContext from '../../Provider/AppContext';

export default function Loader() {
  const {loader} = useContext(AppContext);
  return (
    <Modal visible={loader} transparent={true}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="#f38a30" />
      </View>
    </Modal>
  );
}
