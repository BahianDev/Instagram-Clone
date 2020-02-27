/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';

import Routes from './src/routes'

const App: () => React$Node = () => {
  return (
    <>
        <Routes/>

    </>
  );
};


export default App;
