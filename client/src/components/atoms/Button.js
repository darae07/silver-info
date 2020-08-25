import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// long, short, orange(defalt), white

function Button({title, onPress, type, height}) {
  return (
    <TouchableOpacity
      style={
        !type
          ? defaltButton.button
          : type === 'light'
          ? lightButton.button
          : defaltButton.button
      }
      onPress={onPress}>
      <Text
        style={
          !type
            ? defaltButton.text
            : type === 'light'
            ? lightButton.text
            : defaltButton.text
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default Button;

const baseButton = {
  width: 320,
  elevation: 8,
  paddingVertical: 22,
  paddingHorizontal: 19,
  margin: 3,
  alignItems: 'center',
};
const lightButton = StyleSheet.create({
  button: {
    ...baseButton,
    backgroundColor: '#FFFFFF',
    width: 160,
    paddingVertical: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  text: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
});
const defaltButton = StyleSheet.create({
  button: {
    ...baseButton,
    backgroundColor: '#F27200',
  },
  text: {
    fontSize: 23,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
