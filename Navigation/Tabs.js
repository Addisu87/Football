import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import HomeScreen from "../screens/HomeScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import StandingsScreen from "../screens/StandingsScreen";
import {
  ArrowsPointingOutIcon,
  ChartBarIcon,
  HomeIcon,
  SquaresPlusIcon,
} from "react-native-heroicons/outline";
import TransferScreen from "../screens/TransferScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
        },
        tabBarActiveTintColor: "#00CCBB",
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
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <View className="flex-col items-center">
              <HomeIcon color={color} size={24} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={TransferScreen}
        options={{
          tabBarLabel: "Transfer",
          tabBarIcon: ({ color }) => (
            <View className="flex-col items-center">
              <SquaresPlusIcon color={color} size={24} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Standings"
        component={StandingsScreen}
        options={{
          tabBarLabel: "Stats",
          tabBarIcon: ({ color }) => (
            <View className="flex-col items-center">
              <ChartBarIcon color={color} size={24} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <View className="flex-col items-center">
              <ArrowsPointingOutIcon color={color} size={24} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
