import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import Stacks from "./navigation/Stacks";

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stacks />
      </TailwindProvider>
    </NavigationContainer>
  );
}
