import React from 'react';
import type {Node} from 'react';
import {SafeAreaView,} from 'react-native';
import {RootNavigator} from './navigators/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import styles from './resources/css/Style';


const App: () => Node = () => {

    return (
    <SafeAreaView style={styles.container}>
        <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
