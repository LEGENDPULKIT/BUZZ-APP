import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import facebook from './screens/facebook';
import instagram from './screens/instagram';

export default class App extends React.Component {
  render(){
  return (
    
      <AppContainer/>
 
  );
}
}



//create Tab Navigation
const TabNavigator=createBottomTabNavigator({
facebook:{screen:facebook},
  insta:{screen:instagram}
})

//create App container
const AppContainer=createAppContainer(TabNavigator)


