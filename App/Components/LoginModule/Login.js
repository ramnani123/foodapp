import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import request from '../../Actions/ActionCreator';
import Api from '../../Networking/APIS';
import {httpMethodes} from '../../Constants/Constants';
import {Actions} from 'react-native-router-flux';
import {TextField} from 'react-native-material-textfield';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from '../../Styles/LoginStyles';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      phonenumber: '',
      forgotpassword: false,
      buttonText: 'Login',
      validations: false,
    };
  }

  validation = () => {
    let feilds = [this.state.phonenumber, this.state.password];
    feilds.forEach(value => {
      if (value == '') {
        this.state.validations = false
    } else {
        this.state.validations = true
      }
    });
      if (this.state.validations) {
        this.onClickLogin() 
      } else {
        Alert.alert('Feilds Should not be empty');               
      }
  }


  onClickLogin = () => {
    const {dispatch} = this.props;
      let parameters = {
        phoneNumber: this.state.phonenumber,
        password: this.state.password,
      };
      dispatch(request(Api.logInAPI, httpMethodes.post, parameters)).then(
        response => {
            console.log(response)
          if (response.data.otp) {
            if (response.ok) {
              Actions.home(response);
            } else {
              console.log('error');
            }
          } else {
            Alert.alert('Please verify your number');
          }
        }
      );
  };

  onForgotPasswordClicked = () => {
    console.log('forgotpassword');
  };
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          keyboardOpeningTime={100}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          style={styles.keyboardAwareScrollView}
        >
          <View style={styles.loginContainer}>
            <View style={styles.textFeild}>
              <TextField
                keyboardType="numeric"
                label="Phone Number"
                maxLength={10}
                tintColor="black"
                onChangeText={text => this.setState({phonenumber: text})}
              />
            </View>
            <View style={styles.textFeild}>
              <TextField
                label="Password"
                tintColor="black"
                secureTextEntry={true}
                onChangeText={text => this.setState({password: text})}
              />
            </View>
            <View style={styles.forgotpassword}>
              <TouchableOpacity onPress={this.onForgotPasswordClicked}>
                <Text>Forgot password...?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={this.validation}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{this.state.buttonText}</Text>
              </View>
            </TouchableOpacity>
          </View>
          {this.props.logIn.isLogin ? <Text>loading...</Text> : <Text />}
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    logIn: state.LoginReducers,
  };
}
export default connect(mapStateToProps)(Login);
