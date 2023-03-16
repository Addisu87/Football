/*[x] Bottom tabs navigation (4 screens)
[x] Home Screen
    [x] Header Section
    [x] Banner Section
    [x] Teams Section
    [x] Matches Section
    [x] News Section
*/

import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <View className="flex-row justify-between items-center h-8 m-4">
        <View>
          <Text className="text-4xl font-bold tracking-normal leading-snug">
            Home
          </Text>
        </View>
        <View className="flex-row justify-between text-gray-600">
          <MagnifyingGlassIcon className="mr-5" />
          <BellIcon />
          <View className="w-4 h-4 rounded-sm bg-gray-200  justify-center items-center relative -top-2 right-3">
            <Text className="">3</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
