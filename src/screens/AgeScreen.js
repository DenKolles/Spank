import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../resources/css/Style';
import CirclePattern from "../components/CirclePattern";

export class AgeScreen extends Component {
  state = {
      age: 0
  };
  render = () => {
    const { age } = this.state;
    const {navigate} = this.props.navigation;

    return (
        <View style={styles.container}>
          <View style={{...styles.headerText, marginTop: '20%'}}>
            <Text style={styles.headerText}>Enter your age</Text>
          </View>

          <View style={styles.selectForm} >
            <View style={{...styles.selectButton, marginTop: '15%'}}>
              <TextInput style={{...styles.selectButtonText, lineHeight: 30}}
                     keyboardType='numeric'
                     placeholder="Age"
                     onChangeText={(age) => {
                        age=parseInt(age);
                        this.setState({age});
                     }}
                     age={this.state.age}
              />
              <CirclePattern width="4.5" height="7"/>
            </View>
          </View>

          <View style={{...styles.alignCenter,  marginTop: '5%'}}>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() =>{

                    if (age > 16 && age < 100) {
                      navigate('license', {age: this.state.age, genderValue: this.props.route.params.genderValue, searchValue: this.props.route.params.searchValue});}
                    else if (age > 0 && age < 17){
                        this.props.navigation.reset({
                            index: 0,
                            routes: [{ name: 'age_denied_access' }],
                        });}
                      }}>
              <Text style={{...styles.submitButtonText, ...((age > 0 && age < 100) ? styles.backGroundColorRed: styles.backGroundColorGray)}}>NEXT</Text>
              <CirclePattern width="9.5" height="7"/>
            </TouchableOpacity>
          </View>
        </View>
    );
  };
}
