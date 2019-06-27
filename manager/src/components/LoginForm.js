import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import {
  emailChanged,
  passwordChanged,
  loginUser
} from '../actions';
import { Card, CardSection, Button, Input, Spinner } from './common';

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

  renderError = () => {
    const { error } = this.props;

    if (error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}> {error} </Text>
        </View>
      );
    }
  }

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />
    }

    return (
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
    );
  }

  render() {
    const {
      onEmailChange,
      onPasswordChange,
      renderError,
      renderButton
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

        {renderError()}

        <CardSection>
          {renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser 
})(LoginForm);