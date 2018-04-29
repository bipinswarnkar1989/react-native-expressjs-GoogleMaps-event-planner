import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
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

class CreateEvent extends Component {
 constructor(props){
     super(props);
     this.state = {
         name:null,
         inputHeight:0,
         imageSelectOptions:false
     }
     this.toggleImageSelect = this.toggleImageSelect.bind(this);
 }

 toggleImageSelect(){
    this.setState((prevState,props) => {
        return {
            imageSelectOptions:!prevState.imageSelectOptions
        }
    })
}
  render() {
    return (
        <Container>
        <Content>
      <AppHeader
       title="Create Event" 
       drawerOpen={() => this.props.navigation.navigate('DrawerOpen')}
       />
      <View style={styles.container}>
      <View style={styles.formContainer}>
      <TextInput 
       autoCapitalize="none"
       style={styles.inputStyle}
       onChangeText={value => this.setState({name:value})}
       placeholder="Event Name"
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
           <View style={{alignItems:'center'}}>
           <Icon name='camera' />
           <Text>Camera</Text>
           </View>
           <View style={{alignItems:'center'}}>
           <Icon name='images' />
           <Text>Gallery</Text>
           </View>
         </View>
        }
        <Button full iconLeft onPress={this.toggleImageSelect}>
            <Icon name='image' />
            <Text style={{paddingLeft:10, color:'white'}}>Event Image</Text>
          </Button>
        </View>
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
       
    }
})

export default CreateEvent;
