import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BeachScreen from './screens/BeachScreen';
import CityScreen from './screens/CityScreen';
import ForestScreen from './screens/ForestScreen'
import MountainScreen from './screens/MountainScreen';

const Stack=createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='BeachScreen' component={BeachScreen}/>
      <Stack.Screen name='ForestScreen' component={ForestScreen}/>
      <Stack.Screen name='CityScreen' component={CityScreen}/>
      <Stack.Screen name='MountainScreen' component={MountainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;