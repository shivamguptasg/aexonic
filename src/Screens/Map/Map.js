import React, {useContext} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import AppContext from '../../Provider/AppContext';

export default function Map() {
  const {list} = useContext(AppContext);
  return (
    <MapView
      // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{flex: 1}}
      region={{
        latitude: 22.4524,
        longitude: 73.12592833333333,
        latitudeDelta: 22.4524,
        longitudeDelta: 73.12592833333333,
      }}>
      {list.map((loc) => (
        <Marker
          title={loc.title}
          coordinate={{latitude: loc.latitude, longitude: loc.longitude}}
        />
      ))}
    </MapView>
  );
}
