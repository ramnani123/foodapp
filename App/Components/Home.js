import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../Styles/HomeStyles';

console.disableYellowBox = true;

class Home extends Component {

  componentDidMount() {
  }

  onClickQRScan() {
    Actions.qrScreen();
  }

  onClickBookFromHome() {
    Actions.bookfromhome();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.onClickQRScan();
          }}
        >
          <View style={styles.button}>
            <Text>QRCode</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.onClickBookFromHome();
          }}
        >
          <View style={styles.button}>
            <Text>BookTable</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
