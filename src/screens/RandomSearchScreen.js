import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class RandomSearchScreen extends Component {
  render = () => {
    const {navigate} = this.props.navigation;
    return <View style={styles.container} />;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
