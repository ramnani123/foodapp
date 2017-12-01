import {Scene, Router,  Stack} from 'react-native-router-flux';
import Login from '../Components/Login';
import Home from '../Components/Home';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const Route = () => (
    <Router>
      <Stack key="root" navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} tintColor='white'>
        <Scene key="Login" component={Login} title="" hideNavBar={true}/>
        <Scene key="home" component={Home} title="Home"/>
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