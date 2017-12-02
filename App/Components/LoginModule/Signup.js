import React, { Component, PropTypes } from 'react';
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import  request  from '../../Actions/ActionCreator';
import Api from '../../Networking/APIS';
import {httpMethodes} from '../../Constants/Constants';
import {Actions} from 'react-native-router-flux';
import { TextField } from 'react-native-material-textfield';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../../Styles/LoginStyles';

class Signup extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                username: 'Username',
                password: 'Password',
                phonenumber: '1234567890',
            };
        }

    
    onSignup = () => {
      
    } 
    
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView keyboardOpeningTime={100} scrollEnabled={true} showsVerticalScrollIndicator={false}  style = {styles.keyboardAwareScrollView}>
                    <View style={styles.loginContainer}>
                        <View style={styles.textFeild}>  
                            <TextField label='User name' tintColor='black' onChangeText={(text) => this.setState({phonenumber: text})} />
                        </View>
                       <View style={styles.textFeild}> 
                            <TextField label='Phone number'tintColor='black'onChangeText={(text) => this.setState({username: text})}/>
                        </View>
                        <View style={styles.textFeild}> 
                            <TextField label='Password' tintColor='black' secureTextEntry={true} onChangeText={(text) => this.setState({password: text})}/>
                        </View>
                        <TouchableOpacity onPress={this.onSignup} >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Signup</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        logIn: state.LoginReducers
    };
}
export default connect(mapStateToProps)(Signup);