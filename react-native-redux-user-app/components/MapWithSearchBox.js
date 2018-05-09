import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import MapView from 'react-native-maps';

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
  
  render() {
    return (
      <View style={styles.mapContainer}>
         <MapView
       provider={MapView.PROVIDER_GOOGLE}
       style={styles.map} initialRegion={{
       latitude:-6.270565,
       longitude:106.759550,
       latitudeDelta: 1,
       longitudeDelta: 1
      }}>
  
      {this.state.latitude && this.state.longitude && <MapView.Marker
         coordinate={{latitude:this.state.latitude,longitude:this.state.longitude}}
         title={"Your Location"}
       />}

      </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mapContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    map:{
		...StyleSheet.absoluteFillObject
	}
  });

export default MapWithSearchBox;
