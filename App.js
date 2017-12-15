import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import configureStore from './App/Store/ConfigureStore';
import Route from './App/Router/Routes';
import {Router} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import NavigationDrawer from './App/Components/NavigationDrawer';

const Store = configureStore();
const ConnectedRouter = connect()(Router);

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={Store}>
        <ConnectedRouter scenes={Route} />
      </Provider>
    );
  }
}
