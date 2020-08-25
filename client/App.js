/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TextInput} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from './src/pages/Main';
import Feed from './src/pages/Feed';
import QnAapp from './src/pages/QnAapp';
import WebViewer from './src/pages/WebViewer';
import Intro from './src/pages/Intro';
import MainPreview from './src/pages/MainPreview';

// route.params?.post

const MainStack = createStackNavigator();
function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Main}
        options={{title: '살펴보기'}}
      />
      <MainStack.Screen
        name="WebViewer"
        component={WebViewer}
        options={{title: '자세히 보기'}}
      />
    </MainStack.Navigator>
  );
}
const FeedStack = createStackNavigator();
function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="Feed"
        component={Feed}
        options={{title: '저장'}}
      />
    </FeedStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabNav() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 20,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={MainStackScreen}
        options={{title: '살펴보기'}}
      />
      <Tab.Screen
        name="Feed"
        component={FeedStackScreen}
        options={{title: '저장'}}
      />
      <Tab.Screen
        name="QnA"
        component={QnAapp}
        options={{title: '앱 검색기'}}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F27200',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            paddingBottom: 10,
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Intro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainPreview"
          component={MainPreview}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNav"
          component={TabNav}
          options={{title: '살펴보기'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
