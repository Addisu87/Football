import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center relative bg-white">
      <View>
        <Text className="text-red-400">Hello World!</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
