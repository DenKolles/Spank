import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '../screens/SplashScreen';
import {GenderScreen} from '../screens/GenderScreen';
import {AgeScreen} from '../screens/AgeScreen';
import {EULAScreen} from '../screens/EULAScreen';
import {RandomSearchScreen} from '../screens/RandomSearchScreen';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'gender'}>
      <Stack.Screen name={'gender'} component={GenderScreen} />
      <Stack.Screen name={'age'} component={AgeScreen} />
      <Stack.Screen name={'eula'} component={EULAScreen} />
      <Stack.Screen name={'random_search'} component={RandomSearchScreen} />
    </Stack.Navigator>
  );
};
