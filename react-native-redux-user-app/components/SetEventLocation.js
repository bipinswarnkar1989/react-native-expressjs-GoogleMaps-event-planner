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
import RNGooglePlaces from 'react-native-google-places';


import FIcon from "react-native-vector-icons/FontAwesome";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height;

const GOOGLE_PLACES_API_KEY = 'AIzaSyDhPHD3lGTDQe1mOwo7L-SD7dmpKsDPUsE';

class SetEventLocation extends Component {
    handleInput(value){

    }
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
                 
          <View style={{flex: 1, height:height, width:'100%'}}>
            <MapWithSearchBox
            />
             <View style={styles.searchBox}>
				<View style={styles.inputWrapper}>
					<InputGroup>
						<FIcon name="search" size={15} color="#FF5E3A"/>
						<Input 
							onFocus={()=>alert()}
							style={styles.inputSearch}
							placeholder="Choose event location"
							onChangeText={(value) => this.handleInput(value)}
							value=""
						/>
					</InputGroup>
				</View>
        </View>
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