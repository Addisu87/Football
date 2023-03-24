import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavStacks from "./Navigation/NavStacks";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <NavStacks />
      </TailwindProvider>
    </NavigationContainer>
  );
}
