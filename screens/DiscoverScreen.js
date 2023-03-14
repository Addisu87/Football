import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const DiscoverScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <Text>DiscoverScreen</Text>
    </SafeAreaView>
  );
};

export default DiscoverScreen;
