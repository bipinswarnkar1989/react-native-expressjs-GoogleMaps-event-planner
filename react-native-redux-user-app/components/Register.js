import React, { Component } from 'react';
import {  View, StyleSheet, } from 'react-native';
import {
    Button,
    Text
  } from 'native-base';
  import AppContainer from './AppContainer';
  import Input from './Input';
  import ButtonComp from './Button';
  import Api from '../utils/api';
  const apiObj = new Api();

export default class Register extends Component {
 constructor(props) {
     super(props);
     this.state = {
         firstname:'',
         lastname:'',
         email:'',
         phone_number:'',
         password:''
     }
 }

 async componentDidMount(){
   
}

 navigate(screen){
    this.props.mappedNavigate(screen);
 }
 onChangeText(key,value){
   this.setState({
     [key]: value
   })
 }

 signUp(){
   if (this.state.email && this.state.firstname && this.state.password) {
     this.props.mappedRegister(this.state);
   } else{
     alert('Fill All Fields');
   }
 }
 
  render() {
    return (
     <AppContainer>
        <View style={styles.container}>
       <View style={styles.heading}>
       <Text style={styles.title}>Register</Text>
       </View>
       <View style={styles.regDiv}>
       <View style={styles.inputContainer}>
       <Input
            placeholder="Firstname"
            type='firstname'
            onChangeText={this.onChangeText.bind(this)}
            value={this.state.firstname}
            autoFocus={true}
          />
          <Input
            placeholder="Lastname"
            type='lastname'
            onChangeText={this.onChangeText.bind(this)}
            value={this.state.lastname}
          />
       <Input
            placeholder="Email"
            type='email'
            onChangeText={this.onChangeText.bind(this)}
            value={this.state.email}
            keyboardType="email-address"
          />
          <Input
            placeholder="Phone"
            type='phone_number'
            onChangeText={this.onChangeText.bind(this)}
            value={this.state.phone_number}
            keyboardType="numeric"
          />
          <Input
            placeholder="Password"
            type='password'
            onChangeText={this.onChangeText.bind(this)}
            value={this.state.password}
            secureTextEntry
          />
          <Button block success
        onPress={() => this.signUp()}
      ><Text>Sign Up</Text>
      </Button>
         </View>
       </View>
        
        <View style={styles.regContainer}>
        <Text>Already have an account ?</Text>
        <ButtonComp
          isLoading={false}
          title='Sign In'
          onPress={() => this.navigate('Login')}
        /> 
        </View>
          </View>
     </AppContainer>
    );
  }
}

Register.navigationOptions =  {
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
    regDiv:{
      flex:1,
    },
    inputContainer: {
      marginTop: 40,
      flex:1,
      flexGrow: 1,
      width:300
    },
  });
  
