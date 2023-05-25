import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Matches from "../../components/matchs/Matches";
import Header from "../../components/Header";

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
    </SafeAreaView>
  );
};

export default MatchScreen;
