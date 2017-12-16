import React, {Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {
  Scene,
  Router,
  Stack,
  Tabs,
  Drawer,
  ActionConst,
  Actions,
} from 'react-native-router-flux';
import Login from '../Components/LoginModule/Login';
import {StyleSheet} from 'react-native';
import QRScanning from '../Components/QRModule/QRScreen';
import LoginModule from '../Components/LoginModule/LoginModule';
import TabBar from '../Components/UserModule/TabBar';
import BookATable from '/Volumes/Cred/ReactFiles/Projects/FoodieFaster/foodapp/App/Components/HomeModule/BookATableScreen';
import Home from '../Components/Home';
import Icon from 'react-native-vector-icons';
import MenuContainer from '../Components/MenuModule/MenuContainer';
import EditOrders from '../Components/MenuModule/OrdersEditing';
import SplashScreen from '../Components/LoginModule/SplashScreen';
import ThanksForRegistration from '../Components/HomeModule/ThanksForRegistration';

class Route extends Component {
  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };

  render() {
    return (
      <Router>
        <Stack
          key="root"
          navigationBarStyle={styles.navBar}
          titleStyle={styles.navBarTitle}
          tintColor="white"
          hideNavBar={true}
        >
          <Scene
            key="splash"
            component={SplashScreen}
            initial={true}
            hideNavBar={true}
          />
          <Scene key="loginmodule" component={LoginModule} hideNavBar={true} />

          <Scene
            key="qrScreen"
            component={QRScanning}
            title="Scan QR Code"
            hideNavBar={false}
          />
          <Scene
            key="bookfromhome"
            component={BookATable}
            title="Book A Table"
            hideNavBar={false}
          />
          <Scene
            key="menu"
            component={MenuContainer}
            title="Menu"
            hideNavBar={false}
          />
          <Scene
            key="bookConfirm"
            component={ThanksForRegistration}
            title="Thank You"
            hideNavBar={false}
          />
          <Scene
            key="editOrders"
            component={EditOrders}
            title="Cart"
            hideNavBar={false}
          />
          <Scene
            key="tabbar"
            tabs={true}
            swipeEnabled={true}
            showLabel={false}
            tabBarPosition={'bottom'}
            type={ActionConst.RESET}
          >
            <Scene
              key="Home"
              title="Home"
              component={Home}
              hideNavBar={false}
              icon={TabIcon}
            />
            <Scene
              key="Orders"
              title="My Orders"
              component={TabBar}
              hideNavBar={false}
              icon={TabIcon}
            />
          </Scene>
        </Stack>
      </Router>
    );
  }
}
const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#FFC538', // changing navbar color
  },
  navBarTitle: {
    color: '#FFFFFF',
  },
  barButtonTextStyle: {
    color: '#FFFFFF',
  },
  tab: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.499,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC538',
  },
  icon: {
    width: 25,
    height: 25,
    margin: 5,
    resizeMode: Image.resizeMode.fixed,
  },
});

export default Route;

const TabIcon = ({focused, title}) => {
  switch (title) {
    case 'Home':
      let iconHome = focused
        ? '../Images/home_white.png'
        : '../Images/home_black.png';
      return (
        <View style={styles.tab}>
          {focused ? (
            <Image
              source={require('../Images/home_white.png')}
              style={styles.icon}
            />
          ) : (
            <Image
              source={require('../Images/home_black.png')}
              style={styles.icon}
            />
          )}
          <Text
            style={{
              color: focused ? 'white' : 'black',
            }}
          >
            {title}
          </Text>
        </View>
      );

    case 'My Orders':
      let iconInfo = focused
        ? '../Images/info_white.png'
        : '../Images/info_black.png';
      return (
        <View style={styles.tab}>
          {focused ? (
            <Image
              source={require('../Images/info_white.png')}
              style={styles.icon}
            />
          ) : (
            <Image
              source={require('../Images/info_black.png')}
              style={styles.icon}
            />
          )}
          <Text style={{color: focused ? 'white' : 'black'}}>{title}</Text>
        </View>
      );
  }
};
