import { useAuthContext } from "@/context/AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { LoginScreen } from "@/screens/auth/LoginScreen";
import { ClothesScreen } from "@/screens/clothes/ClothesScreen";

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const { user, initialized } = useAuthContext();

  if (!initialized) return null;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Wardrobe" component={ClothesScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};
