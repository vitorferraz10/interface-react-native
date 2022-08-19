import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { Home } from './src/screens/Home';
import theme from './src/theme';


export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  // const colorScheme = Appearance.getColorScheme();


  if (!fontsLoaded) { 
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}


