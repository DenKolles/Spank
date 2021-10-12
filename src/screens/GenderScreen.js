import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CirclePattern from "../components/CirclePattern";
import styles from '../resources/css/Style';
export class GenderScreen extends Component {
    state={
        maleGenderPressed: false,
        femaleGenderPressed: false,
        otherGenderPressed: false,
        genderValue: undefined,
        maleSearchPressed: false,
        femaleSearchPressed: false,
        otherSearchPressed: false,
        searchValue: undefined
    };

    validateState = () =>{
        return this.state.genderValue !== undefined &&
            this.state.searchValue !== undefined &&
            (this.state.maleGenderPressed || this.state.femaleGenderPressed || this.state.otherGenderPressed) &&
            (this.state.maleSearchPressed || this.state.femaleSearchPressed || this.state.otherSearchPressed);
    }

    render = () => {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{...styles.headerText, marginTop: '14%'}}>
                    <Text style={styles.headerText}>Choose your gender</Text>
                </View>
                <View style={{...styles.selectForm, marginTop: '4.4%'}}>
                    <TouchableOpacity style={styles.selectButton} onPress={() => {
                        this.setState(previousState => {
                            return {
                                maleGenderPressed: !previousState.maleGenderPressed,
                                femaleGenderPressed: false,
                                otherGenderPressed: false,
                                genderValue: 'male'
                            };
                        });
                    }}>
                        <Text style={this.state.maleGenderPressed ? styles.selectedButtonText : styles.selectButtonText}>Male</Text>
                        <CirclePattern width="5" height="7"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectButton} onPress={() => {
                        this.setState(previousState => {
                            return {
                                femaleGenderPressed: !previousState.femaleGenderPressed,
                                maleGenderPressed: false,
                                otherGenderPressed: false,
                                genderValue: 'female'};
                        });
                    }}>
                        <Text style={this.state.femaleGenderPressed ? styles.selectedButtonText : styles.selectButtonText}>Female</Text>
                        <CirclePattern width="5" height="7"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.selectForm}>
                    <TouchableOpacity style={styles.selectButton} onPress={() => {
                        this.setState(previousState => {
                            return {
                                otherGenderPressed: !previousState.otherGenderPressed,
                                maleGenderPressed: false,
                                femaleGenderPressed: false,
                                genderValue: 'other'};
                        });
                    }}>
                        <Text style={this.state.otherGenderPressed ? styles.selectedButtonText : styles.selectButtonText}>Other</Text>
                        <CirclePattern width="5" height="7"/>
                    </TouchableOpacity>
                </View>
                <View style={{...styles.headerText, marginTop: '20%'}}>
                    <Text style={styles.headerText}>Who are you looking for?</Text>
                </View>
                <View style={{...styles.selectForm,  marginTop: '4.4%'}}>
                    <TouchableOpacity style={styles.selectButton} onPress={() => {
                        this.setState(previousState => {
                            return {
                                maleSearchPressed: !previousState.maleSearchPressed,
                                femaleSearchPressed: false,
                                otherSearchPressed: false,
                                searchValue: 'male'};
                        });
                    }}>
                        <Text style={this.state.maleSearchPressed ? styles.selectedButtonText : styles.selectButtonText}>Male</Text>
                        <CirclePattern width="5" height="7"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectButton} onPress={() => {
                        this.setState(previousState => {
                            return {
                                femaleSearchPressed: !previousState.femaleSearchPressed,
                                maleSearchPressed: false,
                                otherSearchPressed: false,
                                searchValue: 'female'};
                        });
                    }}>
                        <Text style={this.state.femaleSearchPressed ? styles.selectedButtonText : styles.selectButtonText}>Female</Text>
                        <CirclePattern width="5" height="7"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.selectForm}>
                    <TouchableOpacity style={styles.selectButton} onPress={() => {
                        this.setState(previousState => {
                            return {
                                otherSearchPressed: !previousState.otherSearchPressed,
                                maleSearchPressed: false,
                                femaleSearchPressed: false,
                                searchValue: 'other'};
                        });
                    }}>
                        <Text style={this.state.otherSearchPressed ? styles.selectedButtonText : styles.selectButtonText}>Other</Text>
                        <CirclePattern width="5" height="7"/>
                    </TouchableOpacity>
                </View>
                <View style={{...styles.alignCenter, marginTop: '5%'}}>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => {
                            if (this.validateState()) navigate('age', {genderValue: this.state.genderValue, searchValue: this.state.searchValue})} }>
                        <Text style={{...styles.submitButtonText, ...(this.validateState()) ? styles.backGroundColorRed: styles.backGroundColorGray}}>LET'S GO!</Text>
                        <CirclePattern width="10.5" height="7"/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}
