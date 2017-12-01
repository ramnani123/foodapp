import React, { Component } from 'react';
import { View, Text, Button, FlatList, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
        componentDidMount() {
            const { data } = this.props;
            console.log('Home', data.user)
        }
        static navigationOptions = { headerLeft:null }

        onClickQRScan() {
            Actions.qrcode()
        }
        
render() {
    return (
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
        <TouchableOpacity onPress={()=>{this.onClickQRScan()}}>
        <View style={{ borderRadius: 5, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', margin: Dimensions.get('window').height*0.02, height: Dimensions.get('window').height*0.4, width: Dimensions.get('window').width*0.9 }}> 
        <Text>QRCode</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{ borderRadius: 5, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', margin: Dimensions.get('window').height*0.02, height: Dimensions.get('window').height*0.4, width: Dimensions.get('window').width*0.9 }}> 
        <Text>BookTable</Text>
        </View>
        </TouchableOpacity>
        </View>
    );
  }
}

export default Home;