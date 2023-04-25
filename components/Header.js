import { View, Text, Image } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import premierLeague from "../assets/images/Premier_League-Logo.png";

const Header = () => {
  return (
    <View className="px-2 mx-auto items-center justify-between space-y-0 flex-row space-x-6 bg-white drop-shadow-xl bg-[#37003CE6]">
      <Image
        source={premierLeague}
        className="block w-36 h-24 bg-white rounded-r-full shrink-0"
      />

      <View className="flex-row justify-between space-x-1 ">
        <MagnifyingGlassIcon className="color-white" />
        <Text className="text-lg text-white font-semibold">SignIn</Text>
      </View>
    </View>
  );
};

export default Header;
