import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArticleDetail from "../screens/ArticleDetail";
import Tabs from "./Tabs";
import LineupScreen from "../screens/LineupScreen";
import HeadToHead from "../components/matchs/HeadToHead";
import PlayerStatistics from "../components/players/PlayerStatistics";
import Players from "../components/players/Players";

const Stack = createNativeStackNavigator();

const NavStacks = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ArticleDetail"
        component={ArticleDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Players"
        component={Players}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="playerStatistics"
        component={PlayerStatistics}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Lineups"
        component={LineupScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="headToHead"
        component={HeadToHead}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavStacks;
