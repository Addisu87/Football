import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LineupScreen from "./LineupScreen";
import Matches from "../components/Matches";
import Header from "../components/Header";

const MatchScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 relative bg-white">
      {/* Header Section */}
      <Header />

      {/* Match Section */}
      <Matches />

      {/* Lineup Section */}
      <LineupScreen />
    </SafeAreaView>
  );
};

export default MatchScreen;
