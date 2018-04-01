import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class App extends Component {
  navigate(screen){
    this.props.mappedNavigate(screen);
  }
  render() {
    return (
      <View>
        <Text> App.js </Text>
        <Button
        onPress={() => this.navigate('Login')}
        title="Login"
      />
      </View>
    );
  }
}
