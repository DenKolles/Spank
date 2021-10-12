import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export class LicenseScreen extends Component {
  render = () => {
    const {navigate} = this.props.navigation;
    console.log("age", this.props.route.params.age);
    console.log("gender", this.props.route.params.genderValue);
    console.log("search", this.props.route.params.searchValue);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 24}}>END USER LICENSE AGREEMENT</Text>
        </View>
        <View style={styles.content} />
        <Button title="ACCEPT" onPress={() => navigate('random_search')} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 4,
  },
});
