import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false, headerTitle: "OlivewoodFacilityBooking", headerShadowVisible: false}}>
        <Stack.Screen name='index' />
      </Stack>
    </SafeAreaProvider>      
  );
}
