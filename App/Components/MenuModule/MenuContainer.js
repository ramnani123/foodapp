import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import styles from '../../Styles/LoginStyles';
import Login from '../LoginModule/Login';
import Signup from '../LoginModule/Signup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Menu from '../MenuModule/Menu';
class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
counter(d) {
this.setState({count: this.state.count + d})
}
  render() {
    return (
      <View
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          backgroundColor: '#FFC538',
        }}
      >
        <ScrollableTabView
          backgroundColor="#FFC538"
          tabBarActiveTextColor="white"
          tabBarPosition="top"
          renderTabBar={() => (
            <TabBar
              tabStyles={(tab = {backgroundColor: 'red'})}
              tabBarTextStyle={{
                width: Dimensions.get('window').width * 0.4,
                textAlign: 'center',
              }}
              backgroundColor="#FFC538"
              paddingTop={0}
              underlineColor="white"
              tabMargin={0}
            />
          )}
        >
          <Menu tabLabel={{label: 'Veg'}} increments={this.counter.bind(this)}/>
          <Menu tabLabel={{label: 'Non-Veg'}} increments={this.counter.bind(this)}/>
        </ScrollableTabView>
        {this.state.count > 0 ? (
          <View
            style={{
              height: 50,
              backgroundColor: 'black',
              width: Dimensions.get('window').width,
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                height: 49,
                backgroundColor: 'white',
                width: Dimensions.get('window').width * 0.7,
              }}
            >
              <View
                style={{
                  height: 49,
                  backgroundColor: 'white',
                  width: Dimensions.get('window').width * 0.7,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text>
                  {this.state.count} items in cart : ${this.state.count * 100}
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 49.5,
                backgroundColor: 'black',
                width: Dimensions.get('window').width * 0.3,
              }}
            >
              <TouchableOpacity>
                <View
                  style={{
                    height: 49,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{color: 'white'}}>View Cart</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
          </View>
        )}
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
