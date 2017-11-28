import React, { Component } from 'react';
import { View, Text, Button, FlatList, Dimensions, TextInput } from 'react-native';
import { connect } from 'react-redux';
import  request  from '../Actions/ActionCreator';
import Api from '../Networking/APIS';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: ''
        };
    }
    componentDidMount() {
        console.log(this.c);
    }
    onClickLogin = () => {
        const {
            dispatch
        } = this.props;
        let parameters = {
            'user_email': this.state.username.toLowerCase(),
            'password': this.state.password
        };
        console.log(parameters)
        dispatch(request(Api.logInAPI, Api.httpMethode.post, Api.headers, parameters))
    }


    render() {
        return (
            <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style = {{ justifyContent: 'center', alignItems: 'center', height: 150, width: 200, backgroundColor: 'green' }}>
            <View style = {{backgroundColor: 'white', height: 30, width: 150}}>
            <TextInput style = {{height: 30}} placeholder = 'Username' onChangeText = {(text)=>this.setState({username: text})}/>
                </View>
                    <View      style = {{backgroundColor: 'white', height: 30, width: 150, margin: 10}}>
                    <TextInput style = {{height: 30}} placeholder = 'Password' onChangeText = {(text)=>this.setState({password: text})}/>
                    </View>
                    <Button title = 'Login' onPress = {() => { this.onClickLogin() }} />
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