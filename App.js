import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavStacks from "./src/navigation/NavStacks";
import { TailwindProvider } from "tailwindcss-react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";

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
