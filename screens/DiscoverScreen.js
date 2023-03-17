import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  BellIcon,
  MagnifyingGlassIcon,
  LifebuoyIcon,
} from "react-native-heroicons/outline";
import { LinearGradient } from "expo-linear-gradient";
import Teams from "../components/Teams";
import { Messi } from "../assets/images/index";

const DiscoverScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 relative bg-white">
      {/* Header Section */}
      <View className="flex-row justify-between items-center h-8 m-4">
        <View>
          <Text className="text-4xl font-bold tracking-normal leading-snug">
            Discover
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

      {/* Banner Section */}
      <LinearGradient
        colors={["#5ED2A0", "#339CB1"]}
        className="pl-4 pr-4 rounded-md h-44"
      >
        <View className="flex-row justify-between top-2">
          <View className="bg-transparent space-y-2">
            <View className="flex-row items-center justify-around bg-white rounded-lg w-1/2">
              <View>
                <LifebuoyIcon />
              </View>
              <Text className="">Football</Text>
            </View>
            <View className="w-[210px]">
              <Text className="truncate text-clip overflow-hidden md:text-clip">
                Saudi Arabia preparing huge offer to secure Lionel Messi
                transfer from Paris Saint...
              </Text>
            </View>
            <View>
              <Text>Tomorrow, 06:30 PM</Text>
            </View>
          </View>

          <View className="">
            <Image
              // source={require("../assets/images/Messi.jpeg")}
              className="h-40 w-40"
              source={Messi}
            />
          </View>
        </View>
      </LinearGradient>

      {/* Teams Section */}
      <Teams />
      {/* Matches Section */}
      {/* News Section */}
    </SafeAreaView>
  );
};

export default DiscoverScreen;
