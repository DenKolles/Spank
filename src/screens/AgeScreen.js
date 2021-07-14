import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

export class AgeScreen extends Component {
  render = () => {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.formHeader}>
          <Text style={{fontSize: 30}}>Please enter your age</Text>
        </View>
        <View style={styles.ageForm}>
          <TextInput placeholder="Age" />
        </View>
        <View style={styles.formSubmit}>
          <Button title="NEXT" onPress={() => navigate('eula')} />
        </View>
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
  ageForm: {
    height: 50,
    margin: 20,
    borderWidth: 1,
  },
  formHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formSubmit: {
    flex: 5,
  },
});
