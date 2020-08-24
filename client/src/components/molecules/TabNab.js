import React from 'react';
import {Text, View, Button} from 'react-native';

function TabNav({navigation}) {
  return (
    <View>
      <Button title="저장" onPress={() => navigation.navigate('Feed')} />
      <Button title="살펴보기" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

export default TabNav;
