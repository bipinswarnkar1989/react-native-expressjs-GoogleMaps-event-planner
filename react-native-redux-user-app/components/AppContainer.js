import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import {
  Button,
  Container,
  Content
} from 'native-base';

export default class AppContainer extends Component {
  render() {
    return (
      <Container>
        <Content>
      <View style={styles.container}>
        <View style={styles.viewStyle}>
        { this.props.children }
          </View>
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
      padding: 2,
    },
    viewStyle:{
        justifyContent: 'center',
        alignItems: 'center',
    }
})
