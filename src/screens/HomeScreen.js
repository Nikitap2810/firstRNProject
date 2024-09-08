import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF', padding: 15}}>
      <Image
        style={{
          ...styles.logoCont,
        }}
        source={require('../assets/images/logo.png')}
      />

      <Text style={{...styles.title}}>Welcome</Text>

      <CustomButton style={{marginTop: 30}}>Logout</CustomButton>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logoCont: {
    height: 200,
    aspectRatio: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 30,
  },
});
