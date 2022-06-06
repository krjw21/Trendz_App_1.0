import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './src/redux_shop';
import { Provider } from 'react-redux';

import Home from './src/views/Home';
import Category from './src/views/Category';
import Product from './src/views/Product';
import Basket from './src/views/Basket';
import Shipping from './src/views/Shipping';
import Login from './src/views/Login';
import Register from './src/views/Register';
import Terms from './src/views/Terms';
import Icon from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation ScreenOptions={ScreenOptions} drawerStyle={{ backgroundColor: 'grey', width: 240, color: 'white' }} drawerContent={DrawerContent}>
          <Drawer.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Shipping" component={Shipping} />
          <Drawer.Screen name="Basket" component={Basket} />
          <Drawer.Screen name="Terms" component={Terms} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const ScreenOptions = ({ navigation }) => ({
  headerShown: true,
  headerTitleStyle: {
    color: 'white'
  },
  headerLeft: () => (
    <Icon name="md-menu" color="white" size={30} style={{ paddingLeft: 15 }} onPress={() => navigation.openDrawer()} />
  ),
  headerRight: () => (
    <Text style={{ color: 'white', fontSize: 24, paddingRight: 15, fontFamily: 'Goudy Old Style' }}>Trendz</Text>
  ),
  headerStyle: {
    backgroundColor: "orange"
  }
})

function DrawerContent(props) {
  return (
    <DrawerContentScrollView style={{ backgroundColor: 'white' }} {...props}>
      <DrawerItem label="Home" onPress={() => props.navigation.navigate('Home', { screen: 'Home' })} />
      <DrawerItem label="Account" onPress={() => props.navigation.navigate('Login', { screen: 'Login' })} />
      <DrawerItem label="Shipping" onPress={() => props.navigation.navigate('Shipping', { screen: 'Shipping' })} />
      <DrawerItem label="Basket" onPress={() => props.navigation.navigate('Basket', { screen: 'Basket' })} />
      <DrawerItem label="Terms &amp; Conditions" onPress={() => props.navigation.navigate('Terms', { screen: 'Terms' })} />
    </DrawerContentScrollView>
  )
}

function HomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={ScreenOptions}>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="Category" component={Category}></Stack.Screen>
      <Stack.Screen name="Product" component={Product}></Stack.Screen>
      <Stack.Screen name="Basket" component={Basket}></Stack.Screen>
      <Stack.Screen name="Shipping" component={Shipping}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Register" component={Register}></Stack.Screen>
      <Stack.Screen name="Terms" component={Terms}></Stack.Screen>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
