import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../components/CustomTextInput';
import {TextInput} from 'react-native-paper';
import {formData} from '../../config/formdata';
import CustomButton from '../../components/CustomButton';
import {loginApi} from '../../api';
import {showMessage} from 'react-native-flash-message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({navigation}) => {
  const [isSecure, setIsSecure] = useState(true);
  const [loading, setLoading] = useState(false);
  const [valErrors, setValErrors] = useState({});

  const [formValues, handleFormValueChange, setFormValues] = formData({
    phone: '',
    password: '',
  });

  const signInApi = async () => {
    setValErrors({});
    setLoading(true);
    const res = await loginApi({...formValues});
    console.log(res);
    if (res?.status == true) {
      navigation.navigate('Home');
    } else {
      setValErrors(res?.errros);
      res?.message &&
        showMessage({
          message: res?.message,
          type: 'danger',
          icon: 'danger',
        });
    }
    setLoading(false);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 15}}>
        <Image
          style={{
            ...styles.logoCont,
          }}
          source={require('../../assets/images/logo.png')}
        />

        <Text style={{...styles.header}}>Sign In </Text>
        <Text style={{...styles.text}}>
          Hi ! Welcome back, you {'\n'}have been missed
        </Text>
        <CustomTextInput
          label={'Phone'}
          left={<TextInput.Icon icon={'phone-outline'} />}
          keyboardType={'phone-pad'}
          value={formValues.phone}
          onChangeText={text => handleFormValueChange('phone', text)}
          error={valErrors?.phone}
        />

        <CustomTextInput
          label={'Password'}
          left={<TextInput.Icon icon={'lock-outline'} />}
          value={formValues.password}
          onChangeText={text => handleFormValueChange('password', text)}
          right={
            <TextInput.Icon
              icon={isSecure ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => setIsSecure(!isSecure)}
            />
          }
          secureTextEntry={isSecure}
          error={valErrors?.password}
        />
        <Pressable
          style={{marginVertical: 10, alignSelf: 'flex-end'}}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{...styles.text}}>Forgot Password?</Text>
        </Pressable>

        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={signInApi}
          style={{marginTop: 20}}>
          Sign In
        </CustomButton>

        <Text
          style={{
            ...styles.text,
            fontSize: 12,
            textAlign: 'center',
            marginTop: 20,
          }}>
          Or
        </Text>

        <View style={{...styles.rcc}}>
          <Pressable style={{...styles.border}}>
            <MaterialCommunityIcons name="google" color={'#000'} size={25} />
          </Pressable>
          <Pressable style={{...styles.border}}>
            <MaterialCommunityIcons name="apple" color={'#000'} size={25} />
          </Pressable>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={{...styles.rcc}}>
          <Text style={{...styles.accText}}>Don't have an account? </Text>
          <Text style={{...styles.accText, color: '#092A4D'}}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={{...styles.accText, marginTop: 20, textAlign: 'center'}}>
          By login or sign up, you agree to our terms of use and privacy policy
        </Text>

        <Image
          style={{bottom: 0, position: 'absolute', left: 0}}
          source={require('../../assets/images/bottomLeftImg.png')}
        />
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logoCont: {
    height: 200,
    aspectRatio: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  header: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 22,
  },
  text: {
    color: '#808080',
    fontWeight: '500',
    fontSize: 16,
  },
  rcc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 10,
  },
  accText: {
    color: '#808080',
    fontWeight: '600',
    fontSize: 12,
  },
  border: {
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 50,
    padding: 5,
    marginHorizontal: 10,
  },
});
