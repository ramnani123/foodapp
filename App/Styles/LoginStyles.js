import {StyleSheet, Dimensions, Image} from 'react-native';
import React, {Component} from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  keyboardAwareScrollView: {
    height: '100%',
    width: '100%',
  },
  imageView: {
    // width: Dimensions.get('window').width * 0.8,
    // height: Dimensions.get('window').height * 0.4,
    alignItems: 'center',
    // paddingTop: Dimensions.get('window').height * 0.08,
    justifyContent: 'center',
    margin: 25,
  },
  backgroundImage: {
    backgroundColor: 'red',
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: Image.resizeMode.cover,
  },
  image: {
    width: '80%',
    height: '100%',
    resizeMode: Image.resizeMode.contain,
  },
  loginContainer: {
    paddingTop: 0,
    margin: 20,
  },
  textFeild: {
    width: Dimensions.get('window').width * 0.9,
  },
  button: {
    marginTop: 44,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  bottomView: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
  bottomButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 43,
    backgroundColor: 'rgba(0,0,0,0)',
    width: Dimensions.get('window').width * 0.5,
    marginRight: 0.5,
  },
  forgotpassword: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    margin: 3,
  },
});
export default styles;
