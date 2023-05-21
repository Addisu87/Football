import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Transfer from "../components/players/Transfer";
import Header from "../components/Header";

const TransferScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      {/* Header Section */}
      <Header />

      {/* Transfer Section */}
      <Transfer />
    </SafeAreaView>
  );
};

export default TransferScreen;
