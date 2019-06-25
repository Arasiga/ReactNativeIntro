import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress = () => {
    const { email, password } = this.state;
    const { onLoginSuccess, onLoginFail } = this;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(onLoginSuccess)
          .catch(onLoginFail);
      });
  }

  onLoginFail = () => {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    });
  }

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress}>
        Log In
      </Button>
    );
  }

  render() {
    const { onButtonPress, renderButton } = this;
    const { errorTextStyle } = styles;

    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='user@gmail.com'
            value={this.state.email}
            onChangeText={ email => this.setState({ email }) }
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            placeholder='password'
            value={this.state.password}
            onChangeText={ password => this.setState({ password }) }
            secure
          />
        </CardSection>

        <Text style={errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;