import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, Row} from 'react-native';
import Button from '../components/atoms/Button';

function Main({navigation}) {
  return (
    <SafeAreaView style={styles.cantainer}>
      <View style={styles.content}>
        <View style={styles.innerContent}>
          <Text>웹뷰: 목업 코레일</Text>
        </View>
        <Button
          style={styles.btn}
          title="자세히 보기"
          height={true}
          onPress={() => navigation.navigate('WebViewer')}
        />
      </View>
      <View style={styles.middle}>
        <Button title="< 이전으로" />
        <Button title="다음으로 >" />
      </View>
      <View style={styles.bottom}>
        <Button
          title="무언가 찾고 계세요?"
          height={true}
          onPress={() => navigation.navigate('QnA')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cantainer: {
    flex: 1,
  },
  content: {
    width: '80%',
    height: '40%',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  innerContent: {
    height: '60%',
  },
  btn: {},
  middle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 10,
  },
});

export default Main;
