import React, { Component } from 'react';
import { View, StyleSheet, BackHandler, Animated,
  Dimensions
 } from 'react-native';
import {
    Text,
    Card,
    Container,
  Content,
  List, ListItem
} from 'native-base';
import AppContainer from './AppContainer';
import ButtonComp from './Button';
import Api from '../utils/api';
const apiObj = new Api();
import Loading from './Loading';
import AppHeader from './AppHeader';

class Home extends Component {
  AnimatedScale = new Animated.Value(1)

    componentDidMount(){
      this.animate();
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

    animate() {
      Animated.timing(
        this.AnimatedScale,
        {
          toValue: .8,
          duration: 1250,
          useNativeDriver: true
        }
      ).start(() => {
        Animated.timing(
          this.AnimatedScale,
          {
            toValue: 1,
            duration: 1250,
            useNativeDriver: true
          }
        ).start(() => this.animate())
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
        <Container>
        <Content>
      <AppHeader
       title="My Events" 
       drawerOpen={() => this.props.navigation.navigate('DrawerOpen')}
       />
          <View style={styles.container}>
        <Text> {this.props.navigation.state.routeName}</Text>
        <Text>{user && user.email}</Text>
        <ButtonComp
          isLoading={false}
          title='Sign Out'
          onPress={() => this.signOut()}
        /> 
         <List>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
      </View>
      </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
    }
})

export default Home;
