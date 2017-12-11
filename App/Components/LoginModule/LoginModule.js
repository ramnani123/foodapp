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

class LoginModule extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Image
          source={require('../../Images/foodappBackground.png')}
          style={styles.backgroundImage}
        />

        <KeyboardAwareScrollView
          keyboardOpeningTime={100}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          style={styles.keyboardAwareScrollView}
        >
          <View style={{height: '30%', width: '100%', paddingTop: 15}}>
            <View style={styles.imageView}>
              <Image
                source={require('../../Images/Food.png')}
                style={styles.image}
              />
            </View>
          </View>
          <View style={{height: '60%'}}>
            <ScrollableTabView
              tabBarActiveTextColor="white"
              renderTabBar={() => (
                <TabBar
                  tabMargin={Dimensions.get('window').width * 0.25}
                  tabBarStyle={{justifyContent: 'center', alignItems: 'center'}}
                  underlineColor="white"
                />
              )}
            >
              <Login tabLabel={{label: 'LogIn'}} />
              <Signup tabLabel={{label: 'Signup'}} />
            </ScrollableTabView>
          </View>
        </KeyboardAwareScrollView>
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
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32,
  },
});
export default LoginModule;
