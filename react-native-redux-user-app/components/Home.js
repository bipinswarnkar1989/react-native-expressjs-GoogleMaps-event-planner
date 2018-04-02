import React, { Component } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';
import {
    Text,
    Card
} from 'native-base';
import AppContainer from './AppContainer';
import ButtonComp from './Button';

class Home extends Component {
    componentDidMount(){
        let nav = this.props.navigation;
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
  render() {
    return (
      <AppContainer>
          <View style={styles.container}>
        <Text> Home {this.props.navigation.state.routeName}</Text>
        <ButtonComp
          isLoading={false}
          title='Sign In'
          onPress={() => this.navigate('Login')}
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
