import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import StackNavigation from './src/navigtion/StackNavigation';
import {Provider as ReduxProvier} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <ReduxProvier store={store}>
        <StackNavigation />
        <FlashMessage position="top" />
      </ReduxProvier>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
