import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AlertExample from '../screens/CoreComponents/AlertExample';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImagesDemo from '../screens/ImagesDemo';
import Profile from '../screens/Profile';
import ImageBackgroundExample from '../screens/Intermediate/ImageBackgroundExample';
import KeyboardAvoidingExample from '../screens/Intermediate/KeyboardAvoidingExample';
import TouchableExamples from '../screens/Intermediate/TouchableExamples';
import ModalExample from '../screens/Intermediate/ModalExample';
import SvgExample from '../screens/Intermediate/SvgExample';
import VibrationExample from '../screens/Intermediate/VibrationExample';

export type AppStackParamList = {
  MainHome: undefined;
  Home: undefined;
  Settings: undefined;
  AlertExample: undefined;
  ImagesDemo: undefined;
  Profile: undefined;
  ImageBackgroundExample: undefined;
  KeyboardAvoidingExample: undefined;
  TouchableExamples: undefined;
  ModalExample: undefined;
  SvgExample: undefined;
  VibrationExample: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();
const BottomTabs = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MainHome" component={BottomTabNavigator} />
        <Stack.Screen name="ImagesDemo" component={ImagesDemo} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="ImageBackgroundExample"
          component={ImageBackgroundExample}
        />
        <Stack.Screen
          name="KeyboardAvoidingExample"
          component={KeyboardAvoidingExample}
        />
        <Stack.Screen name="TouchableExamples" component={TouchableExamples} />
        <Stack.Screen name="ModalExample" component={ModalExample} />
        <Stack.Screen name="SvgExample" component={SvgExample} />
        <Stack.Screen name="VibrationExample" component={VibrationExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 60 },
      }}
    >
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="Settings" component={Settings} />
      <BottomTabs.Screen name="AlertExample" component={AlertExample} />
    </BottomTabs.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});
