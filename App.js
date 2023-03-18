import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoverScreen from "./screens/DiscoverScreen";
import { StyleSheet, Text } from "react-native";
import { BlurView } from "expo-blur";
import StandingsScreen from "./screens/StandingsScreen";
import MoreScreen from "./screens/MoreScreen";
import {
  ArrowsPointingOutIcon,
  ChartBarIcon,
  HomeIcon,
  SquaresPlusIcon,
} from "react-native-heroicons/outline";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { position: "absolute" },
            tabBarActiveTintColor: "#32a83a",
            tabBarBackground: () => (
              <BlurView
                tint="light"
                intensity={100}
                style={StyleSheet.absoluteFill}
              />
            ),
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: () => (
                <Text className="focus:text-white focus:outline-none text-gray-700">
                  Home
                </Text>
              ),
              tabBarIcon: ({ color, size }) => (
                <HomeIcon color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{
              tabBarLabel: () => (
                <Text className="focus:text-white focus:outline-none text-gray-700">
                  Discover
                </Text>
              ),
              tabBarIcon: ({ color, size }) => (
                <ArrowsPointingOutIcon color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Standings"
            component={StandingsScreen}
            options={{
              tabBarLabel: () => (
                <Text className="focus:text-white focus:outline-none text-gray-700">
                  Standings
                </Text>
              ),
              tabBarIcon: ({ color, size }) => (
                <ChartBarIcon color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="More"
            component={MoreScreen}
            options={{
              tabBarLabel: () => (
                <Text className="focus:text-white focus:outline-none text-gray-700">
                  More
                </Text>
              ),
              tabBarIcon: ({ color, size }) => (
                <SquaresPlusIcon color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
