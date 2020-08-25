import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image} from 'react-native';
import Button from '../components/atoms/Button';
import SpeechBubble from '../components/atoms/SpeechBubble';
import {NavigationHelpersContext} from '@react-navigation/native';
import Card from '../components/atoms/Card';
import fakedata from '../fakedata.json';

function MainPreview({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {fakedata.main.map((data, i) => {
          return (
            <Card title={i + 1} text={data.preview.title} key={`card${i}`} />
          );
        })}
      </View>
      <View style={styles.bottom}>
        <Button
          title={'하나씩 보기'}
          onPress={() => navigation.navigate('TabNav')}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    resizeMode: 'cover',
    alignItems: 'center',
  },
  card: {paddingTop: 40},
  bottom: {
    position: 'absolute',
    bottom: 70,
    flexDirection: 'row',
  },
});
export default MainPreview;
