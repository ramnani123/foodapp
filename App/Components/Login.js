import React, { Component, PropTypes } from 'react';
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import  request  from '../Actions/ActionCreator';
import Api from '../Networking/NetworkManager';
import {httpMethodes} from '../Constants/Constants';
import {Actions} from 'react-native-router-flux';
import { TextField } from 'react-native-material-textfield';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'Username',
            password: 'Password',
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
            'user_email': 'ram.gangadhar@credencys.com',
            'password': '123456'
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

    onClickSignup() {
     console.log('onclick') 
    }

    
    render() {
        return (
            <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: Dimensions.get('window').height, width: Dimensions.get('window').width }}>
                <KeyboardAwareScrollView keyboardOpeningTime={100} extraScrollHeight={20} scrollEnabled={false} showsVerticalScrollIndicator={false}  style = {{margin: 8, height: Dimensions.get('window').height, width: Dimensions.get('window').width }}>
                    <View style={{width: Dimensions.get('window').width*0.8, height: Dimensions.get('window').height*0.4, alignItems: 'center', paddingTop: Dimensions.get('window').height*0.15, justifyContent: 'center', paddingLeft: 25 }}>
                        <Image source={require('../Images/Food.png')} style={{width: Dimensions.get('window').width*0.8, height: (Dimensions.get('window').height)*0.3, resizeMode: Image.resizeMode.contain}}/>    
                    </View>
                    <View style={{paddingTop: 15, margin: 20}}>
                        <View style={{width: Dimensions.get('window').width*0.9}}>  
                            <TextField label='Phone Number' tintColor='black'/>
                        </View>
                        {this.state.signup ? (<View style={{width: Dimensions.get('window').width*0.9}}> 
                            <TextField label='User name'tintColor='black'/>
                        </View>): null}
                        <View style={{width: Dimensions.get('window').width*0.9}}> 
                            <TextField label='Password'tintColor='black'/>
                        </View>
                        <TouchableOpacity onPress={!this.state.signup ? (this.onClickLogin): null} >
                            <View style={{marginTop: 44, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', height: 44, borderRadius: 5}}>
                                <Text style={{color: 'white'}}>{this.state.buttonText}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {this.props.logIn.isLogin ? ( <Text>loading...</Text> ) : (<Text></Text>) }
                </KeyboardAwareScrollView>
                <View style={{ backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', height: 44, flexDirection: 'row', width: Dimensions.get('window').width}}>
                    <TouchableOpacity onPress={()=>{this.setState({signup: !this.state.signup, buttonText: this.state.signup ? 'Login': 'Signup'})}}>
                        <View style={{  alignItems: 'center', justifyContent: 'center', height: 43, backgroundColor: 'white', width: Dimensions.get('window').width*0.5, marginRight:1}}>
                            <Text>Signup</Text>
                        </View>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={()=>{this.setState({forgotpassword: true})}}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 43, backgroundColor: 'white', width: Dimensions.get('window').width*0.5}}>
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