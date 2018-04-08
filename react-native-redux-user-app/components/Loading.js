import React, { Component } from 'react';
import {  View, Text, StyleSheet, ActivityIndicator,   PixelRatio,
} from 'react-native';

export default class Loading extends Component {
    overlayStyle() {
        return {
          marginTop: 10,
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center'
        };
      }
  render() {
    return (
      <View style={styles.container}>
        <View style={this.overlayStyle()}>
        <View style={[styles.spinnerContainer, this.props.spinnerContainerStyles]}>
        <Text>Loading...</Text>
          <ActivityIndicator style={styles.spinner} size="large" color="blue" />
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    spinnerContainer: {
        width: 60,
        height: 60,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60 / PixelRatio.get(),
        opacity: 0.70,
      },
      spinner: {
        width: 32,
        height: 32,
      },
})
