import React, { Component } from 'react';
import {  View, StyleSheet } from 'react-native';
import {
  Button,
  Text
} from 'native-base';
import AppContainer from './AppContainer';
import Input from './Input';
import ButtonComp from './Button';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      accessCode: ''
    }
  }
  
  navigate(screen){
     this.props.mappedNavigate(screen);
  }
  onChangeText(key,value){
    this.setState({
      [key]: value
    })
  }
  signIn(){

  }
  render() {
    return (
      <AppContainer>
       <View style={styles.container}>
       <View style={styles.heading}>
       <Text style={styles.title}>Login</Text>
       </View>
       <View style={styles.loginDiv}>
       <View style={styles.inputContainer}>
       <Input
            placeholder="Email"
            type='username'
            onChangeText={this.onChangeText}
            value={this.state.username}
          />
          <Input
            placeholder="Password"
            type='password'
            onChangeText={this.onChangeText}
            value={this.state.password}
            secureTextEntry
          />
          <Button block success
        onPress={() => this.signIn.bind(this)}
      ><Text>Sign In</Text>
      </Button>
         </View>
       </View>
        
        <View style={styles.regContainer}>
        <Text>New to EventPlanner ?</Text>
        <ButtonComp
          isLoading={false}
          title='Sign Up'
          onPress={() => this.navigate('Register')}
        /> 
        </View>
          </View>
      </AppContainer>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    paddingHorizontal: 90,
    marginVertical: 50,
  },
  heading:{
    flexDirection: 'row',
  },
  title:{
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  regContainer:{
    flex:1,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  loginDiv:{
    flex:1,
  },
  inputContainer: {
    marginTop: 40,
    flex:1,
    flexGrow: 1,
    width:300
  },
});
