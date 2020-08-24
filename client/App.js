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
import WebView from './src/pages/WebView';

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
        name="QnA"
        component={QnAapp}
        options={{title: '무언가 찾고 계세요?'}}
      />
      <MainStack.Screen
        name="WebView"
        component={WebView}
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

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
