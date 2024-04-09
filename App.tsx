import 'react-native-gesture-handler';
import React, {memo} from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from './src/redux/store';
import { colors } from './src/constants/colors';
import navigation from './src/navigation/action'
import AppStack from './src/navigation/AppStack';
import { PaperProvider } from 'react-native-paper';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white
    },
  };
  const handleNavRef = (navigatorRef) => {
    navigation.setTopLevelNavigator(navigatorRef)
  };
  return (
    <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider>
            <NavigationContainer theme={MyTheme} ref={handleNavRef}>
              <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                translucent backgroundColor="transparent"
              />
              <AppStack/>
            </NavigationContainer>
          </PaperProvider>
        </PersistGate>
    </ReduxProvider>
  );
}

export default memo(App);