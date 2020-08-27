import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import Button from '../components/atoms/Button';
import SpeechBubble from '../components/atoms/SpeechBubble';

function QnAapp({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <SpeechBubble text={'동영상을 보고 싶으세요?'} />
      <View style={styles.bottom}>
        <Button title="아니오" />
        <Button title="네" height={true} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
  },
});
export default QnAapp;
