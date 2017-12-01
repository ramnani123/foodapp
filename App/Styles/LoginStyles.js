import {
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import React, {
    Component,
    PropTypes
} from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    keyboardAwareScrollView: {
        margin: 8,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    imageView: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.4,
        alignItems: 'center',
        paddingTop: Dimensions.get('window').height * 0.15,
        justifyContent: 'center',
        paddingLeft: 25
    },
    image: {
        width: Dimensions.get('window').width * 0.8,
        height: (Dimensions.get('window').height) * 0.3,
        resizeMode: Image.resizeMode.contain
    },
    loginContainer: {
        paddingTop: 15,
        margin: 20
    },
    textFeild: {
        width: Dimensions.get('window').width * 0.9
    },
    button: {
        marginTop: 44,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        borderRadius: 5
    },
    buttonText: {
        color: 'white'
    },
    bottomView: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        flexDirection: 'row',
        width: Dimensions.get('window').width
    },
    bottomButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 43,
        backgroundColor: 'white',
        width: Dimensions.get('window').width * 0.5,
        marginRight: 1
    },

})
export default styles;