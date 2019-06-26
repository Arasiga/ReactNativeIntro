import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginUser
} from '../actions';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  onEmailChange = (text) => {
    const { emailChanged } = this.props;

    emailChanged(text);
  }

  onPasswordChange = (password) => {
    const { passwordChanged } = this.props;
    
    passwordChanged(password);
  }

  onButtonPress = () => {
    const { email, password, loginUser } = this.props;

    loginUser({ email, password });
  }

  render() {
    const {
      onEmailChange,
      onPasswordChange,
      onButtonPress
    } = this;
    const { email, password } = this.props;

    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            onChangeText={onEmailChange}
            value={email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            secure
            placeholder="password"
            onChangeText={onPasswordChange}
            value={password}
          />
        </CardSection>

        <CardSection>
          <Button onPress={onButtonPress}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser 
})(LoginForm);