import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavStacks from "./src/navigation/NavStacks";
import { TailwindProvider } from "tailwindcss-react-native";
import store from "./features/store";
import { Provider } from "react-redux";

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
