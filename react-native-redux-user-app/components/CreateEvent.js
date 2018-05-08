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
//import ImagePicker from 'react-native-customized-image-picker';
import RNGooglePlaces from 'react-native-google-places';
import { ImagePicker } from 'expo';
import Loading from './Loading';
import AppHeader from './AppHeader';
import MapWithSearchBox from './MapWithSearchBox';

const GOOGLE_PLACES_API_KEY = 'AIzaSyDhPHD3lGTDQe1mOwo7L-SD7dmpKsDPUsE';

class CreateEvent extends Component {
 constructor(props){
     super(props);
     this.state = {
         name:'',
         description:'',
         image:null,
         inputHeight:0,
         imageSelectOptions:false
     }
     this.toggleImageSelect = this.toggleImageSelect.bind(this);
     this.startCamera = this.startCamera.bind(this);
     this.gotoGallery = this.gotoGallery.bind(this);
 }

 toggleImageSelect(){
    this.setState((prevState,props) => {
        return {
            imageSelectOptions:!prevState.imageSelectOptions
        }
    })
}

startCamera = async() => {
    let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
}

gotoGallery = async() => {
    // ImagePicker.openPicker({
  
    // }).then(image => {
    //   console.log(image);
    // });
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:"Images",
        allowsEditing: true,
        aspect: [4, 3],
        quality:0.8,
        base64 :true,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
}

handleAddEvent = async() => {
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('description', this.state.description);
    formData.append('image', {
        uri: this.state.image,
        type: 'image/jpeg', // or photo.type
        name: this.state.name+'-image.jpeg'
      });
    formData.append('creator', this.props.userState.user._id);
    await this.props.mappedaddEvent(formData);
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
      <View style={styles.container}>
      <View style={styles.formContainer}>
      <Text style={styles.h4}>* Where is the event?</Text>
          <View style={{flex: 1}}>
            <MapWithSearchBox
            />
          </View>
      <TextInput 
       autoCapitalize="none"
       style={styles.inputStyle}
       onChangeText={value => this.setState({name:value})}
       placeholder="* Event Name"
       placeholderTextColor="#DE005E"
       />
       <TextInput
        autoCapitalize="none"
        multiline={true}
        onChangeText={value => this.setState({description:value})}
        placeholder="Description"
        placeholderTextColor="#DE005E"
        style={[styles.inputStyle, {height:Math.max(35, this.state.inputHeight)}]}
        onContentSizeChange={(event) => {
            this.setState({ inputHeight: event.nativeEvent.contentSize.height+30  })
        }}
        />
        <View style={styles.imageContainer}>
        {this.state.imageSelectOptions && 
           <View style={styles.imageSelectOptions}>
           <View>
           <TouchableOpacity style={{alignItems:'center'}} onPress={this.startCamera}>
           <Icon name='camera' />
           <Text>Camera</Text>
           </TouchableOpacity>
           </View>
           <View>
           <TouchableOpacity style={{alignItems:'center'}} onPress={this.gotoGallery}> 
           <Icon name='images' />
           <Text>Gallery</Text>
           </TouchableOpacity>
           </View>
         </View>
        }
        <TouchableOpacity style={styles.imageSelect} onPress={this.toggleImageSelect}>
            <Icon name='image' style={{color: '#fff'}} />
            <Text style={{paddingLeft:10, color:'white'}}>Event Image</Text>
          </TouchableOpacity> 
        </View>
        
          <TouchableOpacity
          onPress={() => this.handleAddEvent()}
          style={[styles.submitButton, styles.buttonMargin]}>
          <Text style={styles.largeButtonText}>Next</Text>
          <Icon name='ios-arrow-forward' style={{color: '#fff',marginTop:4,paddingLeft:6}} />
        </TouchableOpacity>
      </View>
      <View style={styles.messageContainer}>
         <Text style={styles.successMessage}>{ successMsg && successMsg}</Text>
         <Text style={styles.errorMessage}>{ errorMsg && errorMsg}</Text>
      </View>
      </View>
      </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    formContainer:{
      flexDirection: 'column',
      alignSelf: 'stretch',
      padding: 20,
    },
    inputStyle:{
        minHeight:60,
        fontSize: 15,
        padding:3
    },
    imageContainer:{
        zIndex:1,
        alignItems: 'center',
    },
    imageSelectOptions:{
       flex:1,
       flexDirection: 'row',
       justifyContent:'space-between',
       width:200,
       
    },
    messageContainer:{
        flex:1,
        marginTop: 20,
        alignItems: 'center',
    },
    successMessage:{
        fontSize:13,
        color:'green'
    },
    errorMessage:{
        fontSize:13,
        color:'red'
    },
    submitButton:{
        alignItems: 'center',
        height:50,
        justifyContent:'center',
        backgroundColor:'#DE005E',
        marginTop:50,
        flexDirection: 'row',
    },
    buttonMargin: {
        marginBottom: 50
      },
      largeButtonText: {
        fontSize: 24,
        fontWeight: '400',
        color: 'white'
      },
      imageSelect:{
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor:'blue',
          padding:10
      },
      h4: {
        fontSize: 16,
        fontWeight: '300',
        color:'#DE005E'
      },
})

 const autocompleteStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    textInputContainer: {
      backgroundColor: 'white',
      height: 44,
      borderTopColor: 'white',
      borderBottomColor: 'white',
    },
    textInput: {
      backgroundColor: 'white',
      borderRadius: 5,
      fontSize: 18,
      height: 28,
      marginLeft: 8,
      marginRight: 8,
      marginTop: 7.5,
      paddingBottom: 4.5,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 4.5,
    },
    poweredContainer: {
      alignItems: 'center',
      backgroundColor:'#EBEEF5',
      justifyContent: 'center',
      
    },
    powered: {
      marginTop: 1,
    },
    listView: {
      flex: 1,
    },
    row: {
      padding: 13,
      height: 44,
      flexDirection: 'row',
    },
    separator: {
      height: 1,
      backgroundColor: 'white',
    },
    loader: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: 20,
    }
  });

export default CreateEvent;
