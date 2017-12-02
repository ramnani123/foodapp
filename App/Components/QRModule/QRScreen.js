    import React, {
        Component
    } from 'react';
    import {
        AppRegistry,
        StyleSheet,
        Text,
        View,
        NavigatorIOS,
        TouchableOpacity,
        Linking,
    } from 'react-native';
    import Camera from 'react-native-camera';
    import QRCodeScanner from 'react-native-qrcode-scanner';
    import PropTypes from 'prop-types';

    class QRScanning extends Component {
        constructor(props, context) {
            super(props, context);
        }
        onSuccess(e) {
            console.log(e.data);
        }

        render() {
            return ( 
                <View style={{flex: 1, width: '100%', height: '100%', justifyContent: 'center', backgroundColor: 'black' }}>
                    <View style={{width: '50%', height: '50%'}}> 
                        < QRCodeScanner onRead = { this.onSuccess.bind(this) }/>
                    </View>
                </View >
            );
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
        },
        preview: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        capture: {
            flex: 0,
            backgroundColor: '#fff',
            borderRadius: 5,
            color: '#000',
            padding: 10,
            margin: 40

        }
    });


    export default QRScanning;