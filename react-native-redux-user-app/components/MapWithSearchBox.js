import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions  } from 'react-native';
//import MapView,{ Marker } from 'react-native-maps';
import {  MapView } from 'expo';


class MapWithSearchBox extends Component {
  constructor(props) {
      super(props);
      this.state = {
        latitude: null,
        longitude: null,
        error:null,
        mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null
      };
  }

  componentDidMount() {
     this.getCurrentLocation();
   }

   getCurrentLocation(){
    navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("wokeeey");
          console.log(position);
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
      );
   }

   _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    this.setState({ mapRegion });
  };

  
  render() {
    if(this.state.latitude && this.state.longitude){
    return (
       <MapView
      provider={MapView.PROVIDER_GOOGLE}
      style={{ flex: 1 }} initialRegion={{
      latitude:this.state.latitude,
      longitude:this.state.longitude,
      latitudeDelta: 1,
      longitudeDelta: 1
     }}>
 
      <MapView.Marker
        coordinate={{latitude:this.state.latitude,longitude:this.state.longitude}}
        title={"Your Location"} description="Some description"
      />
     </MapView> 
     
   )
  } else {
    return(
      <View><Text>Loading Map...</Text></View>
    )
  }
}
}

const styles = StyleSheet.create({
    mapContainer: {
      ...StyleSheet.absoluteFillObject,
      height: 200,
      width: 200,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map:{
		...StyleSheet.absoluteFillObject
  },
  
  });

export default MapWithSearchBox;
