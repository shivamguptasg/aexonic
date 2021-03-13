import React, {useContext} from 'react';
import {Searchbar} from 'react-native-paper';
import AppContext from '../../Provider/AppContext';

export default function SearchBar() {
  const {searchText, setSearchText} = useContext(AppContext);
  return (
    <Searchbar
      placeholder="Search Task"
      onChangeText={(text) => setSearchText(text)}
      value={searchText}
      iconColor="grey"
      placeholderTextColor="grey"
      inputStyle={{color: '#000'}}
      style={{
        borderRadius: 0,
        elevation: 0,
        width: '65%',
        backgroundColor: '#fff',
      }}
    />
  );
}
