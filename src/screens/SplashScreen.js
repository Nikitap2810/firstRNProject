import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {CommonActions} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.navigate({
            name: 'GetStarted',
          }),
        );
      }, 1500);
    };
    fetchData();
  }, []);
  return (
    <View style={{...styles.continer}}>
      <Image
        style={{top: 0, position: 'absolute', left: 0}}
        source={require('../assets/images/topLeftImg.png')}
      />
      <Image
        style={{top: 0, position: 'absolute', right: 0}}
        source={require('../assets/images/topRightImg.png')}
      />
      <Image style={{}} source={require('../assets/images/logo.png')} />
      <Image
        style={{bottom: 0, position: 'absolute', right: 0}}
        source={require('../assets/images/bottomRightImg.png')}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
