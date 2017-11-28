import {Scene, Router,  Stack} from 'react-native-router-flux';
import Login from '../Components/Login';
import Home from '../Components/Home';
import React, { Component } from 'react';

const Route = () => (
    <Router>
      <Stack key="root">
        <Scene key="Login" component={Login} title="Login"/>
        <Scene key="home" component={Home} title="Home"/>
      </Stack>
    </Router>
  );

  export default Route;