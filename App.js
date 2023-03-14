import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoverScreen from "./screens/DiscoverScreen";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Discover" component={DiscoverScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
