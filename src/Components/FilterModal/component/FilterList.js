import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AppContext from '../../../Provider/AppContext';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function FilterList(props) {
  const {setShowFilterModal, setFilter} = useContext(AppContext);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setFilter(props.cotent);
        setShowFilterModal((prevstate) => !prevstate);
      }}>
      <Text style={{fontWeight: 'bold'}}>{props.cotent}</Text>
      <Icon name="angle-right" color="#666564" size={20} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#9a948d',
  },
});
