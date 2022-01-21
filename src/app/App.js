/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Navigation from '../navigation';
import {BLACK, DARK_CONTENT, LIGHT_CONTENT, WHITE} from '../Constants/colors';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? BLACK : WHITE,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? LIGHT_CONTENT : DARK_CONTENT} />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
