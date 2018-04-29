import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import {
    Card,
    Container,
  Content,
  Icon
} from 'native-base';
import Loading from './Loading';
import AppHeader from './AppHeader';

class CreateEvent extends Component {
  render() {
    return (
        <Container>
        <Content>
      <AppHeader
       title="Create Event" 
       drawerOpen={() => this.props.navigation.navigate('DrawerOpen')}
       />
      <View style={styles.container}>
      <Text>CreateEvent</Text>
      </View>
      </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

export default CreateEvent;
