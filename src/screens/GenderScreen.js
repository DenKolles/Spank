import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export class GenderScreen extends Component {
  render = () => {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.formHeader}>
          <Text style={{fontSize: 30}}>Choose your gender</Text>
        </View>
        <View style={styles.genderForm}>
          <Button title="Male" />
          <Button title="Female" />
          <Button title="Other" />
        </View>
        <View style={styles.formHeader}>
          <Text style={{fontSize: 30}}>Who are you looking for?</Text>
        </View>
        <View style={styles.genderForm}>
          <Button title="Male" />
          <Button title="Female" />
          <Button title="Other" />
        </View>
        <View style={styles.formSubmit}>
          <Button title="NEXT" onPress={() => navigate('age')} />
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderForm: {
    flex: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  formSubmit: {
    flex: 1,
  },
});
