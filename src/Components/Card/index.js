import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Status from './components/Status';
import Logo from './components/Logo';
import Accordian from './components/Accordian';

export default function InfoCard(props) {
  const {item} = props;
  const [more, setMore] = React.useState(false);
  return (
    <Card style={{marginVertical: 10,backgroundColor:'#fff'}}>
      <View style={styles.statusContainer}>
        <Logo />
        <View style={styles.nameConrainer}>
          <View>
            <Text style={styles.name}>{item.title}</Text>
            <Text style={{color: '#717070'}}>{item.subtitle}</Text>
          </View>
          <Status status={item.status} />
        </View>
      </View>
      <View style={[styles.statusContainer, {alignItems: 'center'}]}>
        <Icon name={'calendar'} color="#9a948d" size={15} />
        <Text style={{fontSize: 15, color: '#9a948d', marginLeft: 15}}>
          Created: <Text style={{color: '#000'}}>{item.created}</Text>
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Icon name={'list'} color="#9a948d" size={15} />
        <Text style={styles.description}>{item.short_desc}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Icon name={'list-alt'} color="#9a948d" size={15} />
        <Text style={styles.description}>{item.long_desc}</Text>
      </View>
      <Accordian description={item.long_desc} />
    </Card>
  );
}

const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.2,
    borderRadius: 1,
    borderStyle: 'dashed',
    borderColor: '#9a948d',
  },
  nameConrainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  description: {fontSize: 14, color: '#000', marginLeft: 15},
  descriptionContainer: {
    flexDirection: 'row',
    padding: 10,
    paddingRight: 20,
    alignItems: 'center',
  },
});
