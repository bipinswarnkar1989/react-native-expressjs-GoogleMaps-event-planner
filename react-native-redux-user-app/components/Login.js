import React, { Component } from 'react';
import {  View } from 'react-native';
import {
  Button,
  Text
} from 'native-base';
import AppContainer from './AppContainer';

export default class Login extends Component {
  navigate(screen){
     this.props.mappedNavigate(screen);
  }
  render() {
    return (
      <AppContainer>
       <View>
        <Button block success
        onPress={() => this.navigate('App')}
      ><Text>App</Text>
      </Button>
          </View>
      </AppContainer>
    );
  }
}
