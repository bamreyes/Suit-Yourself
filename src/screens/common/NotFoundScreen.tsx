import { Text, View } from "react-native";

export const NotFoundScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 30 }}>Page Not Found</Text>
    </View>
  );
};
