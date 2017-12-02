import {Scene, Router,  Stack} from 'react-native-router-flux';
import Login from '../Components/LoginModule/Login';
import Home from '../Components/Home';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import QRScanning from '../Components/QRModule/QRScreen';
import LoginModule from '../Components/LoginModule/LoginModule';
import BookATable from '../Components/HomeModule/BookATableScreen';

const Route = () => (
    <Router>
      <Stack key="root" navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} tintColor='white'>
        <Scene key="loginmodule" component={LoginModule} hideNavBar={true}/>
        <Scene key="Login" component={Login} title="" hideNavBar={true}/>
        <Scene key="home" component={Home} title="Home"/>
        <Scene key="qrScreen" component={QRScanning} title="Scan QR Code"/>
        <Scene key="bookfromhome" component={BookATable} title="Book A Table" initial={true}/>
      </Stack>
    </Router>
  );

  const styles = StyleSheet.create({
    navBar: {
      backgroundColor: '#FFC538', // changing navbar color
    },
    navBarTitle: {
      color: '#FFFFFF'
    },
    barButtonTextStyle: {
      color: '#FFFFFF'
    },
  });

  export default Route;