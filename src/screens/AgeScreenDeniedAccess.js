import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';
import styles from '../resources/css/Style';

const imagePath = '../resources/images/AgeScreenDeniedAccess.png';

export class AgeScreenDeniedAccess extends Component {
    render = () => {
        return (
            <View style={styles.container}>
                <ImageBackground source={require(imagePath)} style={styles.backgroundImage}>
                </ImageBackground>
            </View>
        );
    };
}
