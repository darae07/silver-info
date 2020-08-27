import React from 'react';
import {Text, View, Button, SafeAreaView, StyleSheet} from 'react-native';

function OneFeed({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.user}>
        <View style={styles.avatar} />
        <Text style={styles.username}>유저 이름</Text>
      </View>
      <View style={styles.content}>
        <Text>저장해놓은 정보가 피드 형식으로 뜸</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    margin: 10,
  },
  avatar: {
    backgroundColor: '#848484',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
  },
  username: {
    fontSize: 20,
    paddingTop: 15,
    paddingLeft: 20,
  },
  content: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 100,
  },
});

export default OneFeed;
