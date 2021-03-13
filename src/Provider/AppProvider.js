import React, {useState} from 'react';
import AppContext from './AppContext';

const AppProvider = ({children}) => {
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filter, setFilter] = useState('All');
  const [searchText, setSearchText] = useState('');

  return (
    <AppContext.Provider
      value={{
        list,
        setList,
        filter,
        setFilter,
        searchText,
        setSearchText,
        loader,
        setLoader,
        showFilterModal,
        setShowFilterModal,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
