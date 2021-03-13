import React, {useContext} from 'react';
import {View, Modal, StyleSheet, Text, FlatList} from 'react-native';
import AppContext from '../../Provider/AppContext';
import FilterList from './component/FilterList';

export default function FilteModal() {
  const {showFilterModal, list} = useContext(AppContext);
  return (
    <Modal visible={showFilterModal} transparent={true}>
      <View style={styles.filterContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>CHOOSE OPTION FROM BELOW</Text>
          <FlatList
            style={{
              height: '60%',
            }}
            data={[...new Set(list.map((filter) => filter.status)), 'All']}
            renderItem={({item}) => <FilterList cotent={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingContainer: {backgroundColor: '#fff', width: '80%'},
  heading: {
    fontWeight: 'bold',
    backgroundColor: '#f5f5f4',
    padding: 15,
    color: '#666564',
  },
});
