import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import InfoCard from '../Card';
import AppContext from '../../Provider/AppContext';

export default function List() {
  const {list, filter, searchText} = useContext(AppContext);
  const [listData, setListData] = React.useState([]);

  React.useEffect(() => {
    setListData(list);
  }, [list]);

  React.useEffect(() => {
    if (!searchText && filter === 'All') setListData(list);
    else {
      const filterData =
        filter === 'All' ? list : list.filter((item) => item.status === filter);
      setListData(
        searchText
          ? filterData.filter(
              (item) =>
                item.title.includes(searchText) ||
                item.subtitle.includes(searchText),
            )
          : filterData,
      );
    }
  }, [filter, searchText]);

  return (
    <FlatList
      data={listData}
      renderItem={({item}) => <InfoCard item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
