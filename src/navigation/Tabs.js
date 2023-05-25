import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import TeamScreen from "../screens/TeamScreen";
import MatchScreen from "../screens/MatchScreen";
import StandingsScreen from "../screens/StandingsScreen";
import TransferScreen from "../screens/TransferScreen";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

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
        name="Team"
        component={TeamScreen}
        options={{
          tabBarLabel: "Team",
          tabBarIcon: ({ color }) => (
            <View className="flex-col items-center">
              <IonIcons name="football" color={color} size={24} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Match"
        component={MatchScreen}
        options={{
          tabBarLabel: "Match",
          tabBarIcon: ({ color }) => (
            <View className="flex-col items-center">
              <MaterialCommunityIcons
                name="soccer-field"
                color={color}
                size={24}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Transfer"
        component={TransferScreen}
        options={{
          tabBarLabel: "Transfer",
          tabBarIcon: ({ color }) => (
            <View className="flex-col items-center">
              <MaterialCommunityIcons name="run" color={color} size={24} />
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
              <Entypo name="bar-graph" color={color} size={24} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
