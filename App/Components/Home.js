import React, { Component } from 'react';
import { View, Text, Button, FlatList, Dimensions, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends React.Component {
        componentDidMount() {
            const { logIn } = this.props;
            console.log('Home', logIn)
        }
    
render() {
    return (
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        </View>
    );
  }
}

export default Home;