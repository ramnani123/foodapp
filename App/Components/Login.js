import React, { Component, PropTypes } from 'react';
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import  request  from '../Actions/ActionCreator';
import Api from '../Networking/APIS';
import {httpMethodes} from '../Constants/Constants';
import {Actions} from 'react-native-router-flux';
import { TextField } from 'react-native-material-textfield';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../Styles/LoginStyles';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'Username',
            password: 'Password',
            phonenumber: '1234567890',
            signup: false,
            forgotpassword: false,
            buttonText: 'Login'
        };
    }

    onClickLogin = () => {
        const {
            dispatch
        } = this.props;
      
        let parameters = {
            'user_email': this.state.phonenumber,
            'password': this.state.password
        };
        console.log(this.state.username, this.state.password)
        dispatch(request(Api.logInAPI, httpMethodes.post, parameters)).then((response) => {
            if (response.ok) {
                Actions.home(response)
            } else {
                console.log('error')
            }
        })
    } 
    
    render() {
        return (
            <View style = {styles.container}>
                <KeyboardAwareScrollView keyboardOpeningTime={100} extraScrollHeight={20} scrollEnabled={false} showsVerticalScrollIndicator={false}  style = {styles.keyboardAwareScrollView}>
                    <View style={styles.imageView}>
                        <Image source={require('../Images/Food.png')} style={styles.image}/>    
                    </View>
                    <View style={styles.loginContainer}>
                        <View style={styles.textFeild}>  
                            <TextField label='Phone Number' tintColor='black' onChangeText={(text) => this.setState({phonenumber: text})} />
                        </View>
                        {this.state.signup ? (<View style={styles.textFeild}> 
                            <TextField label='User name'tintColor='black'onChangeText={(text) => this.setState({username: text})}/>
                        </View>): null}
                        <View style={styles.textFeild}> 
                            <TextField label='Password' tintColor='black' secureTextEntry={true} onChangeText={(text) => this.setState({password: text})}/>
                        </View>
                        <TouchableOpacity onPress={!this.state.signup ? (this.onClickLogin): null} >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>{this.state.buttonText}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {this.props.logIn.isLogin ? ( <Text>loading...</Text> ) : (<Text></Text>) }
                </KeyboardAwareScrollView>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={()=>{this.setState({signup: !this.state.signup, buttonText: this.state.signup ? 'Login': 'Signup'})}}>
                        <View style={styles.bottomButton}>
                            <Text>Signup</Text>
                        </View>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={()=>{this.setState({forgotpassword: true})}}>
                        <View style={styles.bottomButton}>
                            <Text>Forgot Password</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        logIn: state.LoginReducers
    };
}
export default connect(mapStateToProps)(Login);