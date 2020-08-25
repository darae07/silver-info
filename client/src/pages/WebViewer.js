import React from 'react';
import {Text, View, Button, SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';

function WebViewer({navigation, route}) {
  const {web} = route.params;
  return <WebView source={{uri: web}} />;
}

export default WebViewer;
