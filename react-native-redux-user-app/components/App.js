import React, { Component } from 'react';
import {  View } from 'react-native';
import {
  Button,
  Container,
  Content,
  Text
} from 'native-base';
import AppContainer from './AppContainer';

export default class App extends Component {
  navigate(screen){
    this.props.mappedNavigate(screen);
  }
  render() {
    return (
      <AppContainer>
      <View style={{flex:1}}>
        <Text> App.js </Text>
        <Button
        onPress={() => this.navigate('Login')}
      ><Text>Login</Text>
      </Button>
      </View>
      </AppContainer>
    );
  }
}
