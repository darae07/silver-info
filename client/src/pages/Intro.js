import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image} from 'react-native';
import Button from '../components/atoms/Button';
import SpeechBubble from '../components/atoms/SpeechBubble';
import {NavigationHelpersContext} from '@react-navigation/native';
import introImg from '../styles/img/introImg.gif';
function Intro({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          스마트폰의 다양한 어플들 {'\n'}사용이 어려우셨죠~?
        </Text>
        <Image source={introImg} style={styles.introImg} />
        <Text style={styles.text}>
          걱정 마세요. {'\n'}필요한 어플만 쏙쏙 뽑아 알려드려요!
        </Text>
      </View>
      <View style={styles.bottom}>
        <Button
          title={'시작할게요'}
          onPress={() => navigation.navigate('MainPreview')}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    resizeMode: 'cover',
    flex: 1,
    alignItems: 'center',
  },
  content: {
    marginTop: 130,
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 70,
  },
  introImg: {
    width: 260,
    height: 180,
    resizeMode: 'contain',
    marginTop: 70,
    marginBottom: 70,
  },
  text: {
    fontSize: 23,
    textAlign: 'center',
  },
});
export default Intro;
