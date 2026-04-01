import { useAuthContext } from "@/context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { AppNavigator } from "@/navigation/AppNavigator";
import { LoginScreen } from "@/screens/auth/LoginScreen";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const { user, initialized } = useAuthContext();

  if (!initialized) return null;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="App" component={AppNavigator} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};
