/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
  Component
} from 'react';

import {
  Provider
} from 'react-redux';
import configureStore from './App/Store/ConfigureStore';
import Route from './App/Router/Routes';

const Store = configureStore();

export default class App extends Component < {} > {

    render() {
      return (
        <Provider store={ Store }>
          <Route/>
        </Provider>
      );
    }
  }
