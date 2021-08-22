import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

export class GenderScreen extends Component {
  render = () => {
    const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>
          <View style={styles.formHeader}>
            <Text
              style={ styles.button, {
                fontSize: 25,
                color: 'rgb(240, 86, 39)',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}>
              Choose your gender
            </Text>
          </View>
          <View style={styles.genderForm}>
            <TouchableOpacity
              style={ styles.button, {
                alignItems: 'center',
                backgroundColor: '#ffffff',
              }}
              onPress={() => {}}>
              <Text style={{marginVertical: 10, marginHorizontal: 35}}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={ styles.button, {
                alignItems: 'center',
                backgroundColor: '#ffffff',
              }}
              onPress={() => {}}>
              <Text style={{marginVertical: 10, marginHorizontal: 35}}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: '#ffffff',
              }}
              onPress={() => {}}>
              <Text style={{marginVertical: 10, marginHorizontal: 35}}>Other</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formHeader}>
            <Text
              style={{
                fontSize: 25,
                color: 'rgb(240, 86, 39)',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}>
              Who are you looking for?
            </Text>
          </View>
          <View style={styles.genderForm}>
            <TouchableOpacity
             title="Male"  style={ styles.button, {
                alignItems: 'center',
                backgroundColor: '#ffffff',
              }}>
              <Text style={{marginVertical: 10, marginHorizontal: 35}}>Male</Text></

              TouchableOpacity>
            <TouchableOpacity title="Female"
              style={ styles.button, {
                alignItems: 'center',
                backgroundColor: '#ffffff',
              }}>
              <Text style={{marginVertical: 10, marginHorizontal: 35}}>Female</Text></

              TouchableOpacity>
            <TouchableOpacity title="other"
              style={ styles.button, {
                alignItems: 'center',
                backgroundColor: '#ffffff',
              }}>
              <Text style={{marginVertical: 10, marginHorizontal: 35}}>other</Text></

              TouchableOpacity>

          </View>
          <View style={styles.formSubmit}>
             <TouchableOpacity title="LET'S GO!"
              style={ styles.button, {marginVertical: 10, marginHorizontal: 80,
                alignItems: 'center',
                backgroundColor: '#ffffff',
              }}
              onPress={() => navigate('age')}>
              <Text style={{marginVertical: 10, marginHorizontal: 35}}>LET'S GO!</Text></

              TouchableOpacity>
          </View>
        </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "'rgb(255, 229, 97)'",
  },
  button: {
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
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginHorizontal: 30,
  },
  formSubmit: {
    flex: 1,
  },
});
