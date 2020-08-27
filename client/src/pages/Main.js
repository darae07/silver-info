import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image} from 'react-native';
import Button from '../components/atoms/Button';
import fakedata from '../fakedata.json';

function Main({navigation}) {
  const [currentData, setData] = useState();
  const [infoIndex, setIndex] = useState(0);

  useEffect(() => {
    setData(fakedata.main[infoIndex]);
  }, [infoIndex]);

  const handleInfo = (type) => {
    if (infoIndex !== 0 && type === false) {
      setIndex(infoIndex - 1);
    }
    if (infoIndex !== fakedata.main.length - 1 && type === true) {
      setIndex(infoIndex + 1);
    }
  };

  return (
    <SafeAreaView style={styles.cantainer}>
      <View style={styles.content}>
        <View>
          {currentData && (
            <Image
              source={{
                uri: currentData.preview.uri,
              }}
              style={styles.img}
            />
          )}
        </View>
        {currentData && (
          <Text style={styles.text}>{currentData.preview.title}</Text>
        )}
      </View>
      <View style={styles.middle}>
        <Button
          title="< 이전으로"
          type={'light'}
          onPress={() => handleInfo(false)}
        />
        <Button
          title="다음으로 >"
          type={'light'}
          onPress={() => handleInfo(true)}
        />
      </View>
      <View style={styles.bottom}>
        <Button
          title="자세히 보기"
          height={true}
          onPress={() =>
            navigation.navigate('WebViewer', {web: currentData.web})
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cantainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    resizeMode: 'cover',
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
    height: 100,
    width: 100,
  },
  btn: {},
  middle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 180,
  },
  bottom: {
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center',
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  img: {
    width: 300,
    height: 200,
    marginTop: 50,
    marginBottom: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default Main;
