import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Status(props) {
  return <Text style={styles.statusText}>{props.status}</Text>;
}

const styles = StyleSheet.create({
  statusText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#efcf42',
    width: 100,
    height: 30,
    borderRadius: 50,
  },
});
