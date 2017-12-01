import {
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import React, {
    Component
} from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    button: {
        borderRadius: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: Dimensions.get('window').height * 0.02,
        height: Dimensions.get('window').height * 0.4,
        width: Dimensions.get('window').width * 0.9
    },

})

export default styles;