import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class SplashScreen extends Component {
  render = () => {
    return (
      <View style={styles.container}>
        <Text>SPANK</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
