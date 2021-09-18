import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export class GenderScreen extends Component {
  render = () => {
    const {navigate} = this.props.navigation;

    const CirclePattern = props => {
      let rows = [];
      let cols = [];
      for (let i = 0; i < props.height; i++) {
        rows.push(i);
      }
      for (let i = 0; i < props.width; i++) {
        cols.push(i);
      }
      return (
        <View style={{position: 'absolute', top: 15, left: 5, zIndex: -1}}>
          {rows.map((row, rowIndex) => {
            return (
              <View key={rowIndex} style={styles.row}>
                {cols.map((col, colIndex) => {
                  return <View key={colIndex} style={styles.circle} />;
                })}
              </View>
            );
          })}
        </View>
      );
    };

    return (
      <View style={styles.container}>
        <View style={styles.formHeader}>
          <Text style={styles.formHeaderText}>Choose your gender</Text>
        </View>
        <View style={styles.selectForm}>
          <TouchableOpacity style={styles.selectButton} onPress={() => {}}>
            <Text style={styles.selectButtonText}>Male</Text>
            <CirclePattern width="20" height="7" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectButton} onPress={() => {}}>
            <Text style={styles.selectButtonText}>Female</Text>
            <CirclePattern width="20" height="7" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectButton} onPress={() => {}}>
            <Text style={styles.selectButtonText}>Other</Text>
            <CirclePattern width="20" height="7" />
          </TouchableOpacity>
        </View>
        <View style={styles.formHeader}>
          <Text style={styles.formHeaderText}>Who are you looking for?</Text>
        </View>
        <View style={styles.selectForm}>
          <TouchableOpacity style={styles.selectButton} onPress={() => {}}>
            <Text style={styles.selectButtonText}>Male</Text>
            <CirclePattern width="20" height="7" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectButton} onPress={() => {}}>
            <Text style={styles.selectButtonText}>Female</Text>
            <CirclePattern width="20" height="7" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectButton} onPress={() => {}}>
            <Text style={styles.selectButtonText}>Other</Text>
            <CirclePattern width="20" height="7" />
          </TouchableOpacity>
        </View>
        <View style={styles.formSubmit}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigate('age')}>
            <Text style={styles.submitButtonText}>LET'S GO!</Text>
            <CirclePattern width="37" height="7" />
          </TouchableOpacity>
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
  row: {
    flexDirection: 'row',
  },
  circle: {
    width: 3.31,
    height: 3.31,
    borderRadius: 10 / 2,
    margin: 1.8,
    backgroundColor: '#353535',
  },
  selectButton: {
    width: 130,
    height: 50,
    margin: 15,
  },
  selectButtonText: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#ffffff',
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
  },
  submitButton: {
    marginHorizontal: 50,
    marginVertical: 5,
    width: 247,
    height: 50,
  },
  submitButtonText: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    lineHeight: 45,
    backgroundColor: '#949494',
    fontSize: 30,
    fontFamily: 'Bangers-Regular',
    color: '#ffffff',
  },
  formHeader: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  formHeaderText: {
    fontSize: 30,
    color: '#F05627',
    fontFamily: 'Bangers-Regular',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  selectForm: {
    flex: 2,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginHorizontal: 30,
  },
  formSubmit: {
    flex: 1,
    alignItems: 'center',
  },
});
