import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';

const GetStartedScreen = ({navigation}) => {
  return (
    <View style={{...styles.continer}}>
      <Image
        style={{top: 0, position: 'absolute', left: 0}}
        source={require('../../assets/images/topLeftImg.png')}
      />
      <Image
        style={{top: -50, position: 'absolute', right: 0}}
        source={require('../../assets/images/topRightImg.png')}
      />
      <Image style={{}} source={require('../../assets/images/logo.png')} />
      <Text style={{...styles.text}}>
        Sparkle & Shine Transform Your Drive with Every Wash!
      </Text>
      <CustomButton
        onPress={() => navigation.navigate('Login')}
        style={{width: '80%', marginTop: 20}}>
        Let’s Start
      </CustomButton>

      <Pressable
        onPress={() => navigation.navigate('Register')}
        style={{...styles.rcc}}>
        <Text style={{...styles.accText}}>Already have an account? </Text>
        <Text style={{...styles.accText, color: '#092A4D'}}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#808080',
    fontWeight: '600',
    fontSize: 22,
    textAlign: 'center',
  },
  rcc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 5,
  },
  accText: {
    color: '#808080',
    fontWeight: '600',
    fontSize: 12,
  },
});
