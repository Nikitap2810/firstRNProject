import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../components/CustomTextInput';
import {TextInput} from 'react-native-paper';
import {formData} from '../../config/formdata';
import CustomButton from '../../components/CustomButton';
import {registerApi} from '../../api';
import {showMessage} from 'react-native-flash-message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RegisterScreen = ({navigation}) => {
  const [isSecure, setIsSecure] = useState(true);
  const [loading, setLoading] = useState(false);
  const [valErrors, setValErrors] = useState({});
  const [agree, setAgree] = useState(false);

  const [formValues, handleFormValueChange, setFormValues] = formData({
    phone: '',
    password: '',
    name: '',
  });

  const signUpApi = async () => {
    setValErrors({});
    setLoading(true);
    const res = await registerApi({...formValues});
    console.log(res);
    if (res?.status == true) {
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

        <Text style={{...styles.header}}>Sign Up</Text>
        <Text style={{...styles.text}}>
          Fill in the below form and add life to {'\n'}your car!
        </Text>
        <CustomTextInput
          label={'Name'}
          left={<TextInput.Icon icon={'account-outline'} />}
          value={formValues.name}
          onChangeText={text => handleFormValueChange('name', text)}
          error={valErrors?.name}
        />
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
          onPress={() => setAgree(!agree)}
          style={{
            ...styles.rcc,
            justifyContent: 'flex-start',
            marginVertical: 15,
          }}>
          <MaterialCommunityIcons
            name={agree ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
            color={'#808080'}
            size={25}
          />
          <Text style={{...styles.text, color: '#000', marginLeft: 10}}>
            Agree with{' '}
          </Text>
          <Text
            style={{
              ...styles.text,
              textDecorationLine: 'underline',
            }}>
            Terms & Conditions{' '}
          </Text>
        </Pressable>

        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={signUpApi}
          style={{marginTop: 20}}>
          Sign Up
        </CustomButton>

        <Pressable
          onPress={() => navigation.navigate('Login')}
          style={{...styles.rcc}}>
          <Text style={{...styles.accText}}>Alreay have an account? </Text>
          <Text style={{...styles.accText, color: '#092A4D'}}>Sign In</Text>
        </Pressable>

        <Text style={{...styles.accText, marginTop: 20, textAlign: 'center'}}>
          By login or sign up, you agree to our terms of use and privacy policy
        </Text>
        <Image
          style={{bottom: 0, position: 'absolute', left: 0, overflow: 'hidden'}}
          source={require('../../assets/images/bottomLeftImg.png')}
        />
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

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
});
