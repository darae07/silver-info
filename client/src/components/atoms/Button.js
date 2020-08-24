import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Button({title, onPress, type, height}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={height ? ['#FFBF00', '#FF8000'] : ['#FFFFFF', '#FAFAFA']}
        style={
          !type
            ? styles.button
            : type === 'long'
            ? styles.longButton
            : styles.button
        }>
        <Text style={height ? styles.text : styles.textNomal}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 17,
    paddingHorizontal: 19,
    margin: 3,
  },
  longButton: {
    width: '70%',
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 17,
    paddingHorizontal: 19,
    margin: 3,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -0.5, height: 0.5},
    textShadowRadius: 5,
  },
  textNomal: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
