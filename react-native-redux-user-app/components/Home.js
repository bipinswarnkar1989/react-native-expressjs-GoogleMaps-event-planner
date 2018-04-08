import React, { Component } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';
import {
    Text,
    Card
} from 'native-base';
import AppContainer from './AppContainer';
import ButtonComp from './Button';
import Api from '../utils/api';
const apiObj = new Api();
import Loading from './Loading';

class Home extends Component {
    componentDidMount(){
      let nav = this.props.navigation;
      apiObj.getToken().then(token => {
        if (token) {
          this.props.mappedvalidateUser(token,this.props.navigation.state.routeName);
        }else{
          nav.navigate({ routeName:'Login' })
        }
      })
        BackHandler.addEventListener('hardwareBackPress', function() {
            if (nav.state.routeName !== "Login") {
              nav.navigate({ routeName:'Login' })
              return true;
            }
            return false;
          });
    }
    navigate(s){
        this.props.mappedNavigate(s);
    }
    signOut(){
      apiObj.removeToken().then(() => {
        this.props.mappedLogOut();
        this.navigate('Login');
      })
    }
  render() {
    let { isLoggedIn, isAuthenticating, user, successMsg, error } = this.props.userState;
    if (isAuthenticating) {
      return(
        <AppContainer>
          <View>
          <Loading/>
            </View>
          </AppContainer>
      )
    }
    return (
      <AppContainer>
          <View style={styles.container}>
        <Text> {this.props.navigation.state.routeName}</Text>
        <Text>{user && user.email}</Text>
        <ButtonComp
          isLoading={false}
          title='Sign Out'
          onPress={() => this.signOut()}
        /> 
      </View>
      </AppContainer>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
    }
})

export default Home;
