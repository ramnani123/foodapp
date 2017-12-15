import React, {Component} from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class SplashScreen extends Component {
  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      Actions.loginmodule();
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return (
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../Images/splash.jpg')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffc442',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 500,
    height: 500,
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc442',
  },
});
