import React, { Component } from 'react';
import { View, Text, Button, FlatList, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class QRScanning extends Component {
        componentDidMount() {
        }
        
render() {
    return (
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <View style={{ borderRadius: 5, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', margin: Dimensions.get('window').height*0.02, height: Dimensions.get('window').height*0.6, width: Dimensions.get('window').width*0.9 }}> 
        </View>
        </View>
    );
  }
}

export default QRScanning;