import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArticleDetail from "../screens/ArticleDetail";
import Tabs from "./Tabs";
import Players from "../components/Players";
import PlayerStatistics from "../components/PlayerStatistics";
import Lineups from "../components/Lineups";

const Stack = createNativeStackNavigator();

const NavStacks = () => {
  return (
    <Stack.Navigator>
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
        name="lineups"
        component={Lineups}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavStacks;
