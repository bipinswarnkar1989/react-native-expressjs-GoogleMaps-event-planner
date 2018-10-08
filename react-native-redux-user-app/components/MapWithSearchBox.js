import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions  } from 'react-native';
import MapView,{ Marker } from 'react-native-maps';
//import {  MapView } from 'expo';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


class MapWithSearchBox extends Component {
  constructor(props) {
      super(props);
      this.state = {
        latitude: null,
        longitude: null,
        error:null,
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
          }, () => {
            this.props.mappedsetEventLocationOnMap(this.state);
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
    const { latitude, longitude, title, description } = this.props.eventData.eventLocation;
    if(latitude && longitude){
    return (
      <View style={styles.container}>
       <MapView
      provider={MapView.PROVIDER_GOOGLE}
      style={styles.map} region={{
      latitude:latitude,
      longitude:longitude,
      latitudeDelta: 1,
      longitudeDelta: 1
     }}>
 
      <MapView.Marker
        coordinate={{latitude:latitude,longitude:longitude}}
        title={title ? title : "Your Location"} description={description ? description :""}
      />
     </MapView> 
     </View>
   )
  } else {
    return(
      <View style={{display:'flex',alignSelf:'center', justifyContent:'center', marginTop:200}}><Text>Loading Map...</Text></View>
    )
  }
}
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  
  });

export default MapWithSearchBox;
