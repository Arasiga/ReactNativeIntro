import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { SafeAreaView } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyB15luIxok2iPAQP2N7R9p2oB_5kVgYGSE",
      authDomain: "manager-c9974.firebaseapp.com",
      databaseURL: "https://manager-c9974.firebaseio.com",
      projectId: "manager-c9974",
      storageBucket: "",
      messagingSenderId: "83798923638",
      appId: "1:83798923638:web:0a9f9549f0705b4a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        {/* <SafeAreaView style={{ flex: 1 }}> */}
          <Router />
        {/* </SafeAreaView> */}
      </Provider>
    );
  }
}

export default App;