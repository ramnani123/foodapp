import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity,
  Linking,
  Dimensions,
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
      <View
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}
      >
        <View style={{width: Dimensions.get('window').width*0.8, height: Dimensions.get('window').height*0.5, border: 1  }}>
          <QRCodeScanner onRead={this.onSuccess.bind(this)} />
        </View>
      </View>
    );
  }
}

export default QRScanning;