import React, {useContext, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {View, Modal, StyleSheet} from 'react-native';
import AppContext from '../../Provider/AppContext';
import InfoCard from '../../Components/Card';

export default function Map() {
  const {list} = useContext(AppContext);
  const [showModal, setModal] = useState(false);
  const [item, setItem] = useState({});
  return (
    <View style={{flex: 1}}>
      <Modal visible={showModal} transparent={true}>
        <View style={styles.filterContainer}>
          <View style={styles.infoContainer}>
            <Icon
              name="window-close"
              color="#fff"
              size={20}
              onPress={() => setModal(false)}
            />
            <InfoCard item={item} />
          </View>
        </View>
      </Modal>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{flex: 1}}
        region={{
          latitude: 22.4524,
          longitude: 73.12592833333333,
          latitudeDelta: 22.4524,
          longitudeDelta: 73.12592833333333,
        }}>
        {list.map((item) => (
          <Marker
            title={item.title}
            onPress={() => {
              setItem(item);
              setModal(true);
            }}
            coordinate={{latitude: item.latitude, longitude: item.longitude}}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {margin: 15, height: '45%'},
});
