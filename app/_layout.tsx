import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Slot } from "expo-router";
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as NavigationBar from 'expo-navigation-bar';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'DrukWide': require('@/assets/fonts/DrukWide-Medium-Trial.otf'),
    'CallingCode': require('@/assets/fonts/CallingCode-Regular.ttf'),
  });

  const setNavigationBar = async () => {
    await NavigationBar.setBackgroundColorAsync('hsl(0, 0%, 13%)');
    // await NavigationBar.setPositionAsync("absolute");
  };

  useEffect(() => {
    setNavigationBar();
  }, [])

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      {/* <StatusBar style="light" hidden={false} translucent={true} /> */}
      <Slot />
    </SafeAreaProvider>
  );
}
