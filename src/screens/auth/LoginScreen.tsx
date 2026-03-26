import { useAuth } from "@/features/auth/hooks/useAuth";
import React, { useState } from "react";
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading, error } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      await login(email, password);
    } catch (err) {
      Alert.alert("Login Failed", error || "Check your credentials");
    }
  };

  return (
    <View className="flex-1 justify-center px-5 bg-white">
      <Text className="text-4xl font-bold mb-8 color-[#333]">Suit Yourself</Text>

      <TextInput
        className="border border-gray-300 p-4 mb-4 rounded-lg text-base"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        editable={!loading}
      />

      <TextInput
        className="border border-gray-300 p-4 mb-4 rounded-lg text-base"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        editable={!loading}
      />

      {error && <Text className="text-red-500 mb-2">{error}</Text>}

      <TouchableOpacity
        onPress={handleLogin}
        disabled={loading}
        className={`p-4 rounded-lg mt-2 items-center justify-center ${
          loading ? "bg-gray-300" : "bg-blue-500"
        }`}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white font-bold text-center text-lg">Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
