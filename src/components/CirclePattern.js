import React, { Component } from "react";
import {StyleSheet, View} from "react-native";

class CirclePattern extends Component {
    render = () => {
            let rows = [];
            let cols = [];
            let height = this.props.height;
            //ширину указываем в процентах для адаптивности разметки, длина скина 375 пикселей - это 100 процентов.
            // то есть когда мы хотим сделать 20 пикселей ширину, то это 5 процентов экрана (если округлить)
            let width = this.props.width  * 375 / 100;

            for (let i = 0; i < height; i++) {
                rows.push(i);
            }
            for (let i = 0; i < width; i++) {
                cols.push(i);
            }
            return (
                <View style={{position: 'absolute', top: 15, left: 5, zIndex: -1}}>
                    {rows.map((row, rowIndex) => {
                        return (
                            <View key={rowIndex} style={styles.row}>
                                {cols.map((col, colIndex) => {
                                    return <View key={colIndex} style={styles.circle}/>;
                                })}
                            </View>
                        );
                    })}
                </View>
            );
        };
}
export default CirclePattern;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    circle: {
        width: 3.31,
        height: 3.31,
        borderRadius: 10 / 2,
        margin: 1.8,
        backgroundColor: '#353535',
    }
});