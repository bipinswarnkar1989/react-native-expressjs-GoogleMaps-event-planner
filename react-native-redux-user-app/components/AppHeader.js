import React, { Component } from 'react';
import {  View, StyleSheet, Platform, StatusBar  } from 'react-native';

import { 
  Icon, 
  Title,
  Header, 
  Left, 
  Body, 
  Right, 
  } from 'native-base'

export default class AppHeader extends Component {
  render() {
    return (
      <View>
        <Header  style={[{ backgroundColor: '#FF5B6C', height: 70 }, styles.androidHeader]}>
          <Left>
            <Icon name="menu" onPress={() => this.props.drawerOpen()} 
             style={{ paddingLeft: 10, color:'white' }} 
            />
          </Left>
          <Body>
                    <Title>{this.props.title}</Title>
                </Body>
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      }
    })
  }
});