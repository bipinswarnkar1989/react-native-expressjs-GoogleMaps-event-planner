import React from "react";
import { connect } from 'react-redux';
import { AppRegistry, Image, StatusBar,StyleSheet,View, FlatList, TouchableOpacity } from "react-native";

import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Left,
  Body,
  Right,
  Thumbnail,
  Badge,
  Card,
  CardItem,
} from "native-base";
import OIcons from "react-native-vector-icons/Octicons";
import Api from '../utils/api';
const apiObj = new Api();
import * as navActions from '../actions/navActions';
import * as userActions from '../actions/userActions';

 class SideBar extends React.Component {
  signOut(){
    apiObj.removeToken().then(() => {
      this.props.mappedLogOut();
      this.navigate('Login');
    })
  }
  navigate(s){
    this.props.mappedNavigate(s);
}

    render() {
      const  { user, isLoggedIn, email }  = this.props.userState;
      return (
        <Container>
          <Content bounces={false}
            style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
          <View style={{ backgroundColor:"#FF5B6C", height: 24 }} />
            <View style={{position:"relative"}}>
            <Image
              source={{
                uri:
                  "https://raw.githubusercontent.com/mikepenz/MaterialDrawer/develop/app/src/main/res/drawable/header.jpg"
              }}
              style={{
                height: 100,
                width: "100%",
                alignSelf: "stretch",
                position: "absolute"
              }}
            />
            
            <View style={styles.userContainer}>
            <View style={styles.userStyle}>
                  <Thumbnail source={{ uri: 'https://avatars2.githubusercontent.com/u/19688480?s=460&v=4' }} />
                </View>
                <View style={styles.userStyle}>
                  <Text style={styles.userFullName}>{isLoggedIn ? user.firstname + ' '+ user.lastname : 'Guest User'}</Text>
                </View>
            </View>
            </View>
            <View>
            <FlatList
            style={{paddingTop:10}}
          data={[
            {
              text:'Home',
              screen:'Home'
            },
            {
              text:'My Events',
              screen:'MyEvents'
            },
            {
              text:'Create Event',
              screen:'CreateEvent'
            }
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity>
            <ListItem noBorder>
              <Text onPress={() =>this.navigate(item.screen)}>{item.text}</Text>
            </ListItem>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
    <List>
            <ListItem>
              <Text onPress={() => this.signOut()}>Sign Out</Text>
            </ListItem>
            </List>
            </View>
            <View>
            <Text>{//this.props && JSON.stringify(this.props)
            }</Text>
              </View>
            </Content>
            </Container>
            );
        }
     }

     const styles = StyleSheet.create({
        userContainer:{
           flex:1,
           padding:2
        },
        userStyle:{
          justifyContent: 'center',
          alignItems:'center',
          padding: 3,
        },
        userFullName:{
          color:'white',
          fontWeight:'bold',
          backgroundColor:"#FF5B6C",
          textAlign:'center',
          paddingStart:4,
          paddingEnd:4,
          paddingTop:2,
          paddingBottom:2
        },
        userNote:{
          color:'white',
          backgroundColor:"#FF5B6C"
        },
        menuIcon:{
          paddingRight:10
        },
        menuTitle:{
          color:'#6d4c41',
          fontWeight:'bold'
        },
        menuList:{
           paddingTop:10,
           marginTop:10
        },
        
      
      })
      
    const mapDispatchToProps = (dispatch) => {
        return {
          mappedNavigate:screen => dispatch(navActions.navigate(screen)),
          mappedvalidateUser:(token,routeName) => dispatch(userActions.validateUser(token,routeName)),
          mappedLogOut: () => dispatch(userActions.logOut()),
        }
    }

      export default connect(state => ({
        userState: state.authState
    }),mapDispatchToProps)(SideBar);