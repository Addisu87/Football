import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import Teams from "../components/Teams";
import News from "../components/News";
import Header from "../components/Header";

const TeamScreen = () => {
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

      {/* Teams Section */}
      <Teams />

      {/* News Section */}
      <News />
    </SafeAreaView>
  );
};

export default TeamScreen;
