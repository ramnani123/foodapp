import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import styles from '../../Styles/LoginStyles';
import Login from '../LoginModule/Login';
import Signup from '../LoginModule/Signup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class LoginModule extends Component {
  componentWillMount() {
    const { page } = this.props;
    console.log(page)
  }
  render() {
    return (
      <View style={[styles.container]}>
      <KeyboardAwareScrollView keyboardOpeningTime={100}
          extraScrollHeight={20}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          style={styles.keyboardAwareScrollView}>
        <View style={{height: '30%', width: '100%', paddingTop: 15}}>
          <View style={styles.imageView}>
            <Image source={require('../../Images/Food.png')} style={styles.image}/>    
          </View>
        </View>
        <View style={{height: '60%', paddingTop: 30}}>
          <ScrollableTabView tabBarActiveTextColor="#53ac49"
              renderTabBar={() => <TabBar tabMargin={Dimensions.get("window").width*0.25} tabBarStyle={{justifyContent: 'center', alignItems: 'center'}} underlineColor="#53ac49" />}>
            <Login tabLabel={{label: "LogIn"}}/>
            <Signup tabLabel={{label: "Signup"}}/>
          </ScrollableTabView>
        </View>
        </KeyboardAwareScrollView>
        </View>
    );
  }
}
export default LoginModule;