import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function SpeechBubble({text}) {
  return (
    <View style={styles.bubble}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: '#FFFFFF',
    width: '70%',
    borderRadius: 15,
    padding: 15,
    margin: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default SpeechBubble;
