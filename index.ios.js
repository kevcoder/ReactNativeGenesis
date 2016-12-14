import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

import {Todo} from './src/app/Todo';

const ReactNativeGenesis = () => <Todo/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  input: {
    height: 44,
    backgroundColor: 'lightgrey',
    marginTop: 300,
    padding: 8
  }


});

AppRegistry.registerComponent('ReactNativeGenesis', () => ReactNativeGenesis);
