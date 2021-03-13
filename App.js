/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as PaperProvider, Text} from 'react-native-paper';
import AppProvider from './src/Provider/AppProvider';
import Routes from './src/Routes';
import Loader from './src/Components/Loader';

const App: () => React$Node = () => {
  return (
    <PaperProvider>
      <AppProvider>
        <Loader />
        <Routes />
      </AppProvider>
    </PaperProvider>
  );
};

export default App;
