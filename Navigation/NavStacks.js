import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArticleDetail from "../screens/ArticleDetail";
import Tabs from "./Tabs";

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
    </Stack.Navigator>
  );
};

export default NavStacks;
