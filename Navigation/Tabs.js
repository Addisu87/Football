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
        tabBarStyle: { position: "absolute" },
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
          tabBarLabel: ({ color }) => (
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <HomeIcon color={color} size={24} />
              <Text style={{ color: color }}>Home</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={TransferScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <SquaresPlusIcon color={color} size={24} />
              <Text style={{ color: color }}>Transfer</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Standings"
        component={StandingsScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <ChartBarIcon color={color} size={24} />
              <Text style={{ color: color }}>Stats</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <ArrowsPointingOutIcon color={color} size={24} />
              <Text style={{ color: color }}>Explore</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
