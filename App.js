import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavStacks from "./Navigation/NavStacks";
import { TailwindProvider } from "tailwindcss-react-native";
import store from "./features/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <NavStacks />
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
}
