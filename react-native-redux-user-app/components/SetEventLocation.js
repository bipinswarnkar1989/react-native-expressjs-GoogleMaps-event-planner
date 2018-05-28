import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
     } from 'react-native';
import {
      Card,
      Container,
      Content,
      Icon,
      Button 
    } from 'native-base';
    import Loading from './Loading';
import AppHeader from './AppHeader';
import MapWithSearchBox from './MapWithSearchBox';
import RNGooglePlaces from 'react-native-google-places';

const GOOGLE_PLACES_API_KEY = 'AIzaSyDhPHD3lGTDQe1mOwo7L-SD7dmpKsDPUsE';

class SetEventLocation extends Component {
    render() {
        const { newEvent, isLoading, successMsg, errorMsg } = this.props.eventState;
        return (
            <Container>
        <Content>
      <AppHeader
       title="Create Event" 
       drawerOpen={() => this.props.navigation.navigate('DrawerOpen')}
       />
            <View>
                 <Text style={styles.h4}>* Where is the event?</Text>
          <View style={{flex: 1, height:300, width:'100%'}}>
            <MapWithSearchBox
            />
          </View>
            </View>
            </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    h4: {
        fontSize: 16,
        fontWeight: '300',
        color:'#DE005E',
    },
})

export default SetEventLocation;