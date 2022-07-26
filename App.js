import { Text, StyleSheet, View, StatusBar, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { Component } from 'react';
import Home from './src/components/Home';
import SplashScreen from './src/components/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { images, primaryColor} from './BaseThems'

const HomeStack = createStackNavigator();
const HomeScreen = () => (
  <HomeStack.Navigator
    screenOptions={({ navigation, route }) => ({

      headerTitle: (props) => (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold", textAlign: "center" }}>News Feed</Text>
        </View>),
      headerRight: (props) => (
        <View style={{ paddingRight: 20, position: "relative" }}>
          <TouchableOpacity style={{height: 35, width: 35,borderRadius: 20,}}>
            <Image source={images.Notification} style={{ height: 30, width: 30,borderRadius: 20, backgroundColor:"white", overflow: "hidden", }} resizeMode="center" />
          </TouchableOpacity>
        </View>
      ),


    })}>

    <HomeStack.Screen name="Home" component={Home} options={{
      headerShown: true,
      headerStyle: {
        backgroundColor:primaryColor,

      },
    }} />

  </HomeStack.Navigator>
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      isLoading: true,
      loading: true,

    };
  }
  componentDidMount() {
    setTimeout(() => { this.setState({ loading: false }) }, 3000)

  }

  render() {
    if (this.state.loading) {
      return <SplashScreen />;
    }
    return (<>
      <StatusBar
       barStyle="light-content" backgroundColor={primaryColor}
        // backgroundColor="#187240"
        // barStyle="dark-content"
        translucent={false} />

      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </>)
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})