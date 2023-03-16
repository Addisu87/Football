/*[x] Bottom tabs navigation (4 screens)
[x] Discover Screen
    [x] Header Section
    [x] Banner Section
    [x] Teams Section
    [x] Matches Section
    [x] News Section
*/

import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

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
      <View className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
        <View className="justify-between">
          <Image
            source={require("../assets/images/soccer.jpeg")}
            className="h-7 w-7"
          />
          <Text>Football</Text>
        </View>
        <View>
          <Text>
            Saudi Arabi preparing huge offer to secure Lionel Messi transfer
            from Paris Saint...
          </Text>
        </View>
        <View>
          <Text>Tomorrow, 06:30 PM</Text>
        </View>

        <View>
          <Image
            source={require("../assets/images/Messi.jpeg")}
            className="h-40 w-40"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DiscoverScreen;
