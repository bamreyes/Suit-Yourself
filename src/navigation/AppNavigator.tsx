import { TabBar } from "@/components/molecules/TabBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ClothesScreen } from "@/screens/clothes/ClothesScreen";
import { NotFoundScreen } from "@/screens/common/NotFoundScreen";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={NotFoundScreen} />

      <Tab.Screen name="Clothes" component={ClothesScreen} />

      <Tab.Screen
        name="Add"
        component={NotFoundScreen}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
      />

      <Tab.Screen name="Outfits" component={NotFoundScreen} />

      <Tab.Screen name="Profile" component={NotFoundScreen} />
    </Tab.Navigator>
  );
};
