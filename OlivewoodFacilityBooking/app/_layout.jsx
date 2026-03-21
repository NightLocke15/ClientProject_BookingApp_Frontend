import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import UserProvider from '@/contexts/UserContext';
import Root from './root';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Figtree-Italic-VariableFont_wght': require('../assets/fonts/Figtree-Italic-VariableFont_wght.ttf'),
    'Figtree-VariableFont_wght': require('../assets/fonts/Figtree-VariableFont_wght.ttf'),
    'Roboto-Italic-VariableFont_wdth,wght': require('../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf'),
    'Roboto-VariableFont_wdth,wght': require('../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <UserProvider>
        <SafeAreaProvider>
           <Root />    
        </SafeAreaProvider> 
      </UserProvider>       
    </GestureHandlerRootView>         
  );
}
