import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Logo() {
  return (
    <Text
      style={{
        backgroundColor: '#f38a30',
        height: 50,
        width: 50,
        borderRadius: 25,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        // fontWeight:'bold'
      }}>
      W
    </Text>
  );
}

const styles = StyleSheet.create({
  statusText: {
    backgroundColor: '#f38a30',
    height: 50,
    width: 50,
    borderRadius: 25,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    // fontWeight:'bold'
  },
});
