import { useAuthContext } from "@/context/AuthContext";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export const ClothesScreen = () => {
  const { logout } = useAuthContext();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      Alert.alert("Logout Failed");
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 30 }}>My Wardrobe</Text>
      <TouchableOpacity onPress={handleLogout} style={{ backgroundColor: "#007AFF" }}>
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};
