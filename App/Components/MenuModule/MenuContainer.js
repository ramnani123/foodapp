import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import styles from '../../Styles/LoginStyles';
import Login from '../LoginModule/Login';
import Signup from '../LoginModule/Signup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Menu from '../MenuModule/Menu';
class MenuContainer extends Component {
  render() {
    return (
    <View style={{flex: 1, width: '100%', height: '100%', backgroundColor: '#FFC538'}}>
      <ScrollableTabView
        backgroundColor="#FFC538"
        tabBarActiveTextColor="white"
        tabBarPosition="top"
        renderTabBar={() => (
          <TabBar
            tabStyles={tab={backgroundColor: 'red'}}
            tabBarTextStyle={{width: Dimensions.get('window').width*0.4, textAlign: 'center'}}
            backgroundColor="#FFC538"
            paddingTop={0}
            underlineColor="white"
            tabMargin = {0}
          />
        )}
      >
        <Menu tabLabel={{label: 'Veg'}} />
        <Menu tabLabel={{label: 'Non-Veg'}} />
      </ScrollableTabView>
      </View>
    );
  }
}

const styless = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },

  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#FFC538',
    fontSize: 32,
  },
});
export default MenuContainer;
