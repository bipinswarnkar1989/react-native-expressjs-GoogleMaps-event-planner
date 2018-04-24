import React, { Component } from 'react';
import { View, StyleSheet, BackHandler, Animated,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image
 } from 'react-native';
import {
    Text,
    Card,
    Container,
  Content,
  Icon
} from 'native-base';
import AppContainer from './AppContainer';
import ButtonComp from './Button';
import Api from '../utils/api';
const apiObj = new Api();
import Loading from './Loading';
import AppHeader from './AppHeader';
import { fileUri } from '../utils/constants';

class Home extends Component {
  AnimatedScale = new Animated.Value(1)

    componentDidMount(){
      this.animate();
      let nav = this.props.navigation;
      apiObj.getToken().then(token => {
        if (token) {
          this.props.mappedvalidateUser(token,this.props.navigation.state.routeName);
          this.props.mappedgetEvents(this.props.userState.user._id,1,10);
        }else{
          nav.navigate({ routeName:'Login' })
        }
      })
        BackHandler.addEventListener('hardwareBackPress', function() {
            if (nav.state.routeName !== "Login") {
              nav.navigate({ routeName:'Login' })
              return true;
            }
            return false;
          });
    }
    navigate(s){
        this.props.mappedNavigate(s);
    }
    signOut(){
      apiObj.removeToken().then(() => {
        this.props.mappedLogOut();
        this.navigate('Login');
      })
    }

    animate() {
      Animated.timing(
        this.AnimatedScale,
        {
          toValue: .8,
          duration: 1250,
          useNativeDriver: true
        }
      ).start(() => {
        Animated.timing(
          this.AnimatedScale,
          {
            toValue: 1,
            duration: 1250,
            useNativeDriver: true
          }
        ).start(() => this.animate())
      })
    }

    onRowPressed = (item) => {
       alert(item._id)
    }

    renderRow = (item) => {
      return (
         <TouchableOpacity
          onPress={this.onRowPressed.bind(this,item)}
          style={styles.row}
          >
          <View style={styles.rowPartA}>
          <Image 
          source={{ uri:fileUri + item.smallImage }} 
          style={styles.thumbnail}
          />
          <Text style={styles.name}> {item.name} </Text>
          </View>
          <View style={styles.rowPartB}>
          <Icon name="md-arrow-forward" style={{ fontSize: 20 }}></Icon>
          </View>
          </TouchableOpacity>
      )
    }

  render() {
    const { isLoggedIn, isAuthenticating, user, successMsg, error } = this.props.userState;
    const { isLoading, events } = this.props.eventState;
    if (isAuthenticating) {
      return(
        <AppContainer>
          <View>
          <Loading/>
            </View>
          </AppContainer>
      )
    }
    return (
        <Container>
        <Content>
      <AppHeader
       title="My Events" 
       drawerOpen={() => this.props.navigation.navigate('DrawerOpen')}
       />
      <View style={styles.container}>
          {/*this.props.navigation.state.routeName*/}
        
        <FlatList
        data = {events && events}
        renderItem={({item}) => this.renderRow(item)}
        keyExtractor={(item, index) => index.toString()}
        />
      </View>
      </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: 5,
    },
    row:{
      flex:1,
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor:'#F6F8FA',
      marginBottom: 3,
    },
    rowPartB:{
      paddingRight: 5,
    },
    rowPartA:{
      flexDirection: 'row',
      justifyContent:'flex-start',
      alignItems: 'center',
      height:60,
      paddingLeft:3
    },
    thumbnail: {
      width: 50,
      height: 50,
      borderWidth: 1
  },
  name: {
      fontSize: 18,
      paddingLeft: 15,
      color: '#000'
  }
})

export default Home;
