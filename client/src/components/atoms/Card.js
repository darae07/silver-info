import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Card({title, text}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
export default Card;

const base = {
  elevation: 8,
  paddingHorizontal: 19,
  margin: 10,
  alignItems: 'center',
};
const styles = StyleSheet.create({
  card: {
    ...base,
    backgroundColor: '#FFFFFF',
    width: 350,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: '#000000',
  },
  title: {
    fontSize: 23,
    color: '#F27200',
    fontWeight: 'bold',
    marginRight: 15,
  },
});
