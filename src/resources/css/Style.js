import { StyleSheet } from 'react-native';

const red = '#F05627';
const yellow = '#ffe561';
const white = '#ffffff';
const gray = '#949494';
const black = '#000000';

export default StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: yellow,
    },
    selectButton: {
        width: '35%',
        height: 50,
        margin: 15,
    },
    alignCenter: {
        flex: 1,
        alignItems: 'center',
    },
    selectButtonText: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 50,
        backgroundColor: white,
        fontSize: 20,
        fontFamily: 'OpenSans-Regular',
    },
    selectedButtonText: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 50,
        backgroundColor: red,
        fontSize: 20,
        fontFamily: 'OpenSans-Regular',
    },
    selectForm: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginHorizontal: 30,
    },
    submitButtonText: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        lineHeight: 45,
        backgroundColor: gray,
        fontSize: 30,
        fontFamily: 'Bangers-Regular',
        color: white,
    },
    headerText: {
        fontSize: 30,
        color: red,
        fontFamily: 'Bangers-Regular',
        textAlign: 'center',
        textShadowColor: black,
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },
    submitButton: {
        marginHorizontal: 50,
        marginVertical: 5,
        width: '65%',
        height: 50,
    },
    backGroundColorRed: {
        backgroundColor: red
    },
    backGroundColorGray: {
        backgroundColor: gray
    },
    licenseHtml: {
        height: '57%',
        marginHorizontal: '5%',
        marginTop: '3%'
    }
});