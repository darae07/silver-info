import React from 'react';
import {Text, View, Button, SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';

function WebViewer({navigation}) {
  return <WebView source={{uri: 'https://www.korailtalk.co.kr/35'}} />;
}

export default WebViewer;
