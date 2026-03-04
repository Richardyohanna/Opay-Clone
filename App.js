// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import NavigationSection from "./screens/NavigationSection";           // ✅ tabs
import AirtimeScreen from "./screens/AirtimeScreen/AirtimeScreen";     // ✅ airtime page
import ActionRoute from "./route/ActionRoute";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  console.log("NavigationSection =", NavigationSection);
  console.log("AirtimeScreen =", AirtimeScreen);

  return (
      <NavigationContainer>
        <ActionRoute />
      </NavigationContainer>
  );
}