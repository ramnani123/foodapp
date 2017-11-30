import React, { Component, PropTypes } from 'react';
import { View, Text, Dimensions, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import  request  from '../Actions/ActionCreator';
import Api from '../Networking/APIS';
import {httpMethodes} from '../Constants/Constants';
import {Actions} from 'react-native-router-flux';
import AnimationsScreen from '../UIElements/ActivityLoder';
import { TextField } from 'react-native-material-textfield';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'Username',
            password: 'Password'
        };
    }
    componentDidMount() {
       
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
        dispatch(request(Api.logInAPI, httpMethodes.post, parameters)).then((status) => {
            if (status) {
                   Actions.home()
            } else {
                console.log('error')
            }
        })
    }


    render() {
        return (
            <ScrollView>
            <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: Dimensions.get('window').width*0.8, height: Dimensions.get('window').height*0.35, backgroundColor: 'black' }}>
                    <Image/>    
                </View>
                <View style={{width: Dimensions.get('window').width*0.8}}>  
                    <TextField label='Username' tintColor='black'/>
                </View>
                <View style={{width: Dimensions.get('window').width*0.8}}> 
                    <TextField label='Password'tintColor='black'/>
                </View>
                <View style={{width: Dimensions.get('window').width*0.8, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', height: 40}}> 
                    <Text style={{width: Dimensions.get('window')*0.8, color: 'white'}}>Login</Text>
                </View>
                {this.props.logIn.isLogin ? ( <Text>loading...</Text> ) : (<Text></Text>) }
            </View>
            </ScrollView>
        );
    }
}
function mapStateToProps(state) {
    return {
        logIn: state.LoginReducers
    };
}
export default connect(mapStateToProps)(Login);

