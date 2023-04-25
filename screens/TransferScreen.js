import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Transfer from "../components/Transfer";

const TransferScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Transfer />
    </SafeAreaView>
  );
};

export default TransferScreen;
