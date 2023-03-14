import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoverScreen from "./screens/DiscoverScreen";
import { Icon } from "react-native-vector-icons/FontAwesome";
import { Text } from "react-native";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: () => (
                <Text className="focus:text-white focus:outline-none text-gray-500">
                  Home
                </Text>
              ),
              tabBarIcon: () => <Icon name="rocket" size={30} color="#900" />,
            }}
          />
          <Tab.Screen name="Discover" component={DiscoverScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
