import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends React.Component {

  signup() {
    Actions.signup()
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Image style={styles.backgroundImg} source={require('../images/background_3.gif')} />
          <Logo />
          <Form type="LOGIN" />
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={this.signup}>
              <Text style={styles.signupButton}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  },
  backgroundImg: {
    backgroundColor: '#ccc',
    flex: 1,
    resizeMode: 'stretch',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  }
});
