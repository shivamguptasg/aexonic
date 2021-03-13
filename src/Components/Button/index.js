import React from 'react';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function IconButton(props) {
  return (
    <Button
      icon={() => <Icon name={props.icon} color="#fff" size={20} />}
      mode="contained"
      color="#f38a30"
      labelStyle={{color: '#fff', size: 20}}
      onPress={props.onPress}>
      {props.title}
    </Button>
  );
}
