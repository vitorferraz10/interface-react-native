import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { Button } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { Home } from './src/screens/Home';
import { dark, light } from './src/theme';


export default function App() {
  const [useTheme, setUseTheme] = useState(true);

  // const deviceTheme = useColorScheme();
const wichTheme = useTheme ? light : dark;


  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) { 
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={wichTheme}>
      <Home />
      <Button
        title={useTheme ? `Change to dark theme` : `Change to light theme`}
        onPress={() => setUseTheme((prev: boolean) => !prev)}
      />
    </ThemeProvider>
  );
}


