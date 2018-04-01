import React, { Component } from 'react';
import { StyleSheet, TextInput  } from 'react-native';

const Input = ({ placeholder, onChangeText, type, ...props }) => {
    return (
        <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.Input}
        placeholder={placeholder}
        placeholderTextColor="#a0a0a0"
        onChangeText={value => onChangeText(type, value)}
        underlineColorAndroid="transparent"
        { ...props }
        />
    )
}

const styles = StyleSheet.create({
    Input:{
        height:45,
        marginBottom: 15,
        borderBottomRightRadius: 1,
        borderBottomWidth: 1.5,
        fontSize: 14,
        borderBottomColor: '#FF1493',
        fontFamily: 'normal',
    }
})


export default Input;
