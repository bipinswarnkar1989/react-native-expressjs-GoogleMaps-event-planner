import React, { Component } from 'react';
import {  View, Text, Button } from 'react-native';

export default class Login extends Component {
  navigate(screen){
     this.props.mappedNavigate(screen);
  }
  render() {
    return (
      <View>
        <Text> Login.js </Text>
        <Button
        onPress={() => this.navigate('App')}
        title="App"
      />
      </View>
    );
  }
}
