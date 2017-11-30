import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import Animation from 'lottie-react-native';
import LottieView from 'lottie-react-native';


const warn = require('../Constants/warn.json')    


  export default class AnimationsScreen extends Component {
    
  
    constructor(props) {
      super(props);
      this.state = {
        progress: new Animated.Value(0),
      };
    }
  
    componentDidMount() {
      Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 5000,
      }).start();
    }
  
    render() {
      // The screen's current route is passed in to `props.navigation.state`:
      return (
        <View>
          <Animation
            style={{
              width: 400,
              height: 400,
            }}
            source={warn}
            progress={this.state.progress}
          />
        </View>
      );
    }
  }
  