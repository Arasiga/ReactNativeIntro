import React, { Component } from 'react'
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from "./components/common";
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch(this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}

export default App;