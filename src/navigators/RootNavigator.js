import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GenderScreen} from '../screens/GenderScreen';
import {AgeScreen} from '../screens/AgeScreen';
import {LicenseScreen} from '../screens/LicenseScreen';
import {RandomSearchScreen} from '../screens/RandomSearchScreen';
import {AgeScreenDeniedAccess} from '../screens/AgeScreenDeniedAccess';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'gender'}
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name={'gender'} component={GenderScreen} />
      <Stack.Screen name={'age'} component={AgeScreen} />
      <Stack.Screen name={'age_denied_access'} component={AgeScreenDeniedAccess} />
      <Stack.Screen name={'license'} component={LicenseScreen} />
      <Stack.Screen name={'random_search'} component={RandomSearchScreen} />
    </Stack.Navigator>
  );
};
