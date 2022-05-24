import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './src/redux_shop';
import { Provider } from 'react-redux';

import Home from './src/views/Home';
import Category from './src/views/Category';
import Product  from './src/views/Product';
import Basket from './src/views/Basket';
import Shipping from './src/views/Shipping';
import Login from './src/views/Login';
import Register from './src/views/Login';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Category" component={Category}></Stack.Screen>
          <Stack.Screen name="Product" component={Product}></Stack.Screen>
          <Stack.Screen name="Basket" component={Basket}></Stack.Screen>
          <Stack.Screen name="Shipping" component={Shipping}></Stack.Screen>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="Register" component={Register}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
