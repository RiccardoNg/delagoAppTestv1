import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Setting from './screens/Setting';
import Home from './screens/Home';
import TNM from './screens/TNMCalculator';
import Lens from './screens/Lens';
import HealthTracker from './screens/HealthTracker';
import HealthTrackerBloodPressure from './screens/HealthTrackerBloodPressure';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Loading from './screens/Loading';
import AlzheimerTest from './screens/AlzheimerTest';
import Welcome from './screens/Welcome';
import MBTITest from './screens/MBTITest';
import Excel2json from './screens/Excel2json';
import HealthTrackerGraph from './screens/HealthTrackerGraph';



import { createStackNavigator, NavigationActions } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
  SettingScreen: { screen: Setting, navigationOptions: {header: null} },
  HomeScreen: { screen: Home, navigationOptions: {header: null} } ,
  TNMScreen: { screen: TNM, navigationOptions: {header: null}} , 
  LensScreen: { screen: Lens} , 
  HealthTrackerScreen: { screen: HealthTracker} , 
  HealthTrackerBloodPressureScreen: { screen: HealthTrackerBloodPressure} ,
  LoginScreen: {screen:Login} ,
  SignupScreen: {screen:Signup} ,
  LoadingScreen: {screen:Loading, navigationOptions: {header: null}    } ,
  AlzheimerTestScreen: {screen: AlzheimerTest} ,
  WelcomeScreen: {screen: Welcome} ,
  MBTITestScreen: {screen: MBTITest} ,
  Excel2jsonScreen: {screen: Excel2json} ,
  HealthTrackerGraphScreen: {screen: HealthTrackerGraph} ,
  
  },
  {
    initialRouteName: 'HomeScreen',
  },
  
  
 );


export default class App extends React.Component {
	
  
  
  render() {
    return (
    
      <AppNavigator/>
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
