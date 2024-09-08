import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const CustomButton = ({
  mode = 'contained',
  style,
  onPress,
  loading,
  disabled,
  children,
}) => {
  return (
    <View style={style}>
      <Button
        onPress={onPress}
        theme={{roundness: 5}}
        mode={mode}
        labelStyle={[styles.labelStyle]}
        contentStyle={{
          paddingVertical: 4,
        }}
        buttonColor="#94C7FF"
        disabled={disabled}
        loading={loading}>
        {children}
      </Button>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  labelStyle: {
    color: '#092A4D',
    fontWeight: 'bold',
  },
});
