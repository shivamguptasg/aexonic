import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function Accordian(props) {
  const [more, setMore] = React.useState(false);
  return (
    <>
      <Icon
        onPress={() => setMore(!more)}
        name={more ? 'angle-up' : 'angle-down'}
        style={{textAlign: 'center'}}
        color="#9a948d"
        size={25}
      />
      {more && <Text style={styles.accordianText}>{props.description}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  accordianText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 15,
    paddingVertical: 10,
  },
});
