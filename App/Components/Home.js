import React, { Component } from 'react';
import { View, Text, Button, FlatList, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../Styles/HomeStyles';

class Home extends Component {
        componentDidMount() {
            const { data } = this.props;
            console.log('Home', data.user)
        }
        static navigationOptions = { headerLeft:null }

        onClickQRScan() {
            Actions.qrScreen()
        }
        
render() {
    return (
        <View style = {styles.container}>
        <TouchableOpacity onPress={()=>{this.onClickQRScan()}}>
        <View style={styles.button}> 
        <Text>QRCode</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.button}> 
        <Text>BookTable</Text>
        </View>
        </TouchableOpacity>
        </View>
    );
  }
}

export default Home;