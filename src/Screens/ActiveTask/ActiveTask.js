import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import AppContext from '../../Provider/AppContext';
import SearchBar from '../../Components/SearchBar';
import IconButton from '../../Components/Button';
import List from '../../Components/List';
import FilteModal from '../../Components/FilterModal';

export default function ActiveTask() {
  const {setList, filter, setLoader, setShowFilterModal} = useContext(
    AppContext,
  );
  React.useEffect(() => {
    setLoader(true);
    fetch('https://run.mocky.io/v3/82f1d43e-2176-4a34-820e-2e0aa4566b5c')
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);
        setList(data);
      })
      .catch((error) => {
        setLoader(false);
        alert('Error:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FilteModal />
      <View style={styles.searchContainer}>
        <SearchBar />
        <IconButton
          title="Filter"
          icon="filter"
          onPress={() => setShowFilterModal((prevstate) => !prevstate)}
        />
      </View>
      {filter !== 'All' && (
        <Text style={{color: '#000'}}>
          FILTER APPLIED : {filter.toUpperCase()}
        </Text>
      )}
      <View style={{flex: 1}}>
        <List />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
