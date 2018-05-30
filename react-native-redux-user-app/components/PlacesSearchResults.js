import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions  } from 'react-native';
import { List, ListItem, Left, Body, Item } from 'native-base';

import MIcon from 'react-native-vector-icons/MaterialIcons';

var width = Dimensions.get('window').width; //full width

class PlacesSearchResults extends Component {
  render() {
    const { predictions } = this.props;
    return (
      <View style={styles.wrapper}>
        <List
            dataArray={predictions}
            renderRow={(item) => {
                return (
                    <View>
                        <ListItem button avatar>
                          <Left>
                              <MIcon name={location-on} />
                          </Left>
                          <Body>
                              <Text>{item.description}</Text>
                          </Body>
                        </ListItem>
                    </View>
                )
            }}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper:{
       top:160,
       position:'absolute',
       width:width,
       height:1000,
       backgroundColor:'white',
       opacity:0.9
    }
})

export default PlacesSearchResults;
