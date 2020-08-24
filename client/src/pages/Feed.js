import React from 'react';
import {Text, View, Button, SafeAreaView, ScrollView} from 'react-native';
import OneFeed from '../components/molecules/OneFeed';
function Feed({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Text>유저</Text>
        <Text>저장해놓은 정보가 피드 형식으로 뜸</Text>
      </View>
      <ScrollView>
        <OneFeed />
        <OneFeed />
        <OneFeed />
        <OneFeed />
        <OneFeed />
        <OneFeed />
        <OneFeed />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Feed;
