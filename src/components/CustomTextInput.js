import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HelperText, TextInput} from 'react-native-paper';

const CustomTextInput = ({
  label,
  placeholder,
  left,
  maxLength,
  keyboardType,
  autoCapitalize,
  style,
  value,
  onChangeText,
  right,
  secureTextEntry,
  error,
}) => {
  return (
    <View style={style}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          theme={{roundness: 6}}
          mode="outlined"
          dense={true}
          outlineColor="#808080"
          activeOutlineColor="#092A4D"
          placeholder={placeholder}
          placeholderTextColor="lightgray"
          style={styles.input}
          maxLength={maxLength}
          keyboardType={keyboardType || 'default'}
          autoCapitalize={autoCapitalize || 'sentences'}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          right={right}
          left={left}
          secureTextEntry={secureTextEntry}
        />
        {error && <HelperText style={{color: 'red'}}>{error}</HelperText>}
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  label: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 14,
    marginTop: 15,
  },
  inputContainer: {
    shadowColor: '#000000',
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  input: {
    shadowColor: '#00000050',
    elevation: 5,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#FFF',
  },
});
