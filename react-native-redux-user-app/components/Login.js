import React, { Component } from 'react';
import {  View, StyleSheet } from 'react-native';
import {
  Button,
  Text
} from 'native-base';
import AppContainer from './AppContainer';
import Input from './Input';
import ButtonComp from './Button';
import Api from '../utils/api';
const apiObj = new Api();

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  async componentDidMount(){
      // apiObj.getToken().then(token => {
      //   if (token) {
      //     this.props.mappedvalidateUser(token,this.props.navigation.state.routeName);
      //   }
      // })
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
     this.props.mappedLogin(this.state);
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
            type='email'
            onChangeText={this.onChangeText.bind(this)}
            value={this.state.email}
            autoFocus={true}
          />
          <Input
            placeholder="Password"
            type='password'
            onChangeText={this.onChangeText.bind(this)}
            value={this.state.password}
            secureTextEntry
          />
          <Button block success
        onPress={() => this.signIn()}
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
        <ButtonComp
          isLoading={false}
          title='Home'
          onPress={() => this.navigate('Home')}
        /> 
        </View>
          </View>
      </AppContainer>
    );
  }
}

Login.navigationOptions =  {
  drawerLockMode: 'locked-closed'
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
