import React from 'react';
import {Text, View, Button, SafeAreaView} from 'react-native';
function Main({navigation}) {
  return (
    <SafeAreaView>
      <Text>살펴보기</Text>
      <Button title="다음으로" />
      <View>
        <Text>웹뷰</Text>
        <Button
          title="자세히 보기"
          onPress={() => navigation.navigate('WebView')}
        />
      </View>
      <Button title="이전으로" />
      <Button
        title="무언가 찾고 계세요?"
        onPress={() => navigation.navigate('QnA')}
      />
    </SafeAreaView>
  );
}

export default Main;
