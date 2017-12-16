import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ListView,
} from 'react-native';

class ThanksForRegistration extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri:
                'https://st.depositphotos.com/1865899/1821/v/950/depositphotos_18213615-stock-illustration-like-thumbs-up-symbol-icon.jpg',
            }}
          />
        </View>

        <Text style={styles.buttontext2}> Thank you</Text>
        <Text style={styles.buttontext2}> for Registrations!</Text>

        <Text style={styles.buttontext}>
          your booking has been confirmed for saturday 9th Dec ,2017 at
          06:00PM.Tou have booked table for 4 seat
        </Text>

        <Text style={styles.buttontex2}>Book More Table</Text>

        <Text style={styles.buttontext2}>Home</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    flex: 1,
    margin: 20,
  },
  logo: {
    width: 250,
    height: 250,
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 15,
    color: '#000',
  },
  buttonContainer: {
    backgroundColor: '#171717',
    paddingVertical: 15,
    marginTop: 15,
  },
  buttontext: {
    textAlign: 'center',
    color: '#007fc8',
    fontWeight: '700',
  },
  textLayout: {
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  buttontext2: {
    textAlign: 'center',
    color: '#007fc8',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ThanksForRegistration;