import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppNavigator from './components/AppNavigator';
//import { Font , AppLoading} from 'expo';
import { StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/platform";

const store = configureStore();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentDidMount() {
    // await Font.loadAsync({
    //   Roboto: require("native-base/Fonts/Roboto.ttf"),
    //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    //   Ionicons: require("native-base/Fonts/Ionicons.ttf")
    // });
    // this.setState({ isReady: true });
  }
  render() {
    //   if (!this.state.isReady) {
    //    return null;
    //  }
    return (
      <Provider store={store}>
      <StyleProvider style={getTheme(material)}>
        <AppNavigator/>
        </StyleProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
