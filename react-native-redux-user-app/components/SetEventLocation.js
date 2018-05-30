import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions
     } from 'react-native';
import {
      Card,
      Container,
      Content,
      Icon,
      Button ,
      InputGroup, Input 
    } from 'native-base';
import Loading from './Loading';
import AppHeader from './AppHeader';
import MapWithSearchBox from './MapWithSearchBox';

import FIcon from "react-native-vector-icons/FontAwesome";

import PlacesSearchResults from './PlacesSearchResults';

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height;

const GOOGLE_PLACES_API_KEY = 'AIzaSyDhPHD3lGTDQe1mOwo7L-SD7dmpKsDPUsE';

class SetEventLocation extends Component {
    handleInput(value){
        fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&key=${GOOGLE_PLACES_API_KEY}`)
        .then((results) => {
            results.json().then(d => {
                //alert(JSON.stringify(d.predictions));
                this.props.mappedsetPlacesPredictions(d);
            })
        })
        .catch((error) => console.log(error.message));
    }
    render() {
        const { createEvent, isLoading, successMsg, errorMsg, placesPredictions } = this.props.eventState;
        
        return (
            <Container>
        <Content>
      <AppHeader
       title="Create Event" 
       drawerOpen={() => this.props.navigation.navigate('DrawerOpen')}
       />
            <View>
                 
          <View style={{flex: 1, height:height, width:'100%'}}>
            <MapWithSearchBox
             eventData = {createEvent}
             mappedsetEventLocationOnMap = {(location) => this.props.mappedsetEventLocationOnMap(location)}
            />
             <View style={styles.searchBox}>
				<View style={styles.inputWrapper}>
					<InputGroup>
						<FIcon name="search" size={15} color="#FF5E3A"/>
						<Input 
							onFocus={()=>console.log('Focussed')}
							style={styles.inputSearch}
							placeholder="Choose event location"
							onChangeText={(value) => this.handleInput(value)}
							
						/>
					</InputGroup>
				</View>
        </View>
        {placesPredictions && 
           <PlacesSearchResults
            predictions = {placesPredictions}
            />
        }
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
    searchBox:{
        top:0,
        position:"absolute",
        width:width
    },
    inputWrapper:{
        marginLeft:15,
        marginRight:10,
        marginTop:10,
        marginBottom:0,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7
    },
    inputSearch:{
        fontSize:14
    },
    label:{
        fontSize:10,
        fontStyle: "italic",
        marginLeft:10,
        marginTop:10,
        marginBottom:0
    }
})

export default SetEventLocation;