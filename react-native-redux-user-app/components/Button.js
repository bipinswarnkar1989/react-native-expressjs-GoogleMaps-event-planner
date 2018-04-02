import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

const Button = ({ title, onPress, isLoading}) => (
    <TouchableOpacity onPress={() => onPress()}>
       <View style={styles.button}>
      <Text style={[styles.buttonText]}>{title}</Text>
      {
        isLoading && (
          <View style={styles.activityIndicator}>
            <ActivityIndicator color={colors.primary} />
          </View>
        )
      }
    </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        flexDirection: 'row'
      },
      buttonText: {
        color: '#FF1493',
        fontFamily: 'normal',
        fontSize: 22,
        letterSpacing: 0.5
      },
      activityIndicator: {
        transform: [{scale: 0.70}],
        marginTop: 3.5,
        marginLeft: 5
      }
});

export default Button;