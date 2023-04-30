import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  LoginScreen,
  HomeScreen
} from '../screens';
import { CustomDrawer } from '../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType: 'front',
        drawerActiveBackgroundColor: 'transparent',
        drawerStyle: {
          width: "65%"
        },
        drawerLabelStyle: {
          marginLeft: -20,
          color: '#fff'
        },
        headerStyle: {
          backgroundColor: '#c6cbef',
          height: 80
        },
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => <MaterialCommunityIcons name="home-outline" size={22} color="#fff" />
        }}
      />
      <Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Sair',
          headerShown: false,
          drawerIcon: () => <MaterialCommunityIcons name="logout-variant" size={22} color="#fff" />
        }}
      />
    </Navigator>
  );
}
