import React, { Component } from 'react'
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from "./components/common";
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDi-vo27x--KBaZkHVcRgfB0pRI6ctHZcE',
      authDomain: 'react-native-auth-9d5e9.firebaseapp.com',
      databaseURL: 'https://react-native-auth-9d5e9.firebaseio.com',
      projectId: 'react-native-auth-9d5e9',
      storageBucket: 'react-native-auth-9d5e9.appspot.com',
      messagingSenderId: '861969264385',
      appId: '1:861969264385:web:aa987e6cceccf31b'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
}

export default App;