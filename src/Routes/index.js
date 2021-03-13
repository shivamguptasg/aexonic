import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ActiveTask from '../Screens/ActiveTask';
import Map from '../Screens/Map';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const CompletedRoute = () => <Text>Complted</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const Stack = createStackNavigator();

const HomeRoute = () => (
  <Tab.Navigator
    initialRouteName="Active"
    tabBarOptions={{
      activeTintColor: '#f38a30',
    }}>
    <Tab.Screen
      name="Active"
      component={ActiveTask}
      options={{
        tabBarLabel: 'Active',
        tabBarIcon: ({color, size}) => (
          <Icon name="list-ul" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Completed"
      component={CompletedRoute}
      options={{
        tabBarLabel: 'Completed',
        tabBarIcon: ({color, size}) => (
          <Icon name="check-circle-o" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileRoute}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
          <Icon name="user" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#f38a30',
          },
          title:'Assign to Me',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <View style={styles.iconContainer}>
              <Icon
                name="refresh"
                size={25}
                color="#fff"
                style={{marginHorizontal: 8}}
              />
              <Icon
                name="map-marker"
                size={25}
                color="#fff"
                style={{marginHorizontal: 8}}
                onPress={() => navigation.navigate('Map')}
              />
            </View>
          ),
        })}>
        <Stack.Screen name="Home" component={HomeRoute} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

const styles = StyleSheet.create({
  iconContainer: {flexDirection: 'row', marginHorizontal: 10},
});
