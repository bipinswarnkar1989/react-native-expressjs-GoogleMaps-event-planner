import React from "react";
import { AppRegistry, Image, StatusBar,StyleSheet,View } from "react-native";

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
  CardItem
} from "native-base";
import OIcons from "react-native-vector-icons/Octicons";

export default class SideBar extends React.Component {
    render() {
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
                  <Text style={styles.userFullName}>Bipin Swarnkar</Text>
                </View>
            </View>
            </View>
            </Content>
            </Container>
            );
        }
     }

     const styles = StyleSheet.create({
        userContainer:{
           flex:1,
           flexDirection: 'column',
           justifyContent:'flex-start'
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
      