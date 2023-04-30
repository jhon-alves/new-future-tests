import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerNavigation } from './DrawerNavigation';
import {
  LoginScreen,
  VictoryChartTest
} from '../screens';
import { TRootStackParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<TRootStackParamList>();

export function StackNavigation() {
  return (
    <Navigator
      screenOptions={{
        headerTintColor: "#c6cbef",
      }}
    >
      <Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="Home"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
      <Screen
        name="VictoryChart"
        component={VictoryChartTest}
      />
    </Navigator>
  );
}
