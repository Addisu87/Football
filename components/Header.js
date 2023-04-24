import { View, Text } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { PrimerLeague } from "../assets/images";

const Header = () => {
  return (
    <View className="py-4 px-4 mx-auto items-center justify-center space-y-0 top-3 flex-row space-x-6 bg-[#37003CE6]">
      <View>
        <Image
          source={PrimerLeague}
          className="block mx-0 h-24 rounded-full drop-shadow-lg shrink-0"
        />
      </View>

      <View className="flex-row justify-between">
        <MagnifyingGlassIcon className="mr-5 color-white" />
        <Text className="text-lg text-white font-semibold">SignIn</Text>
      </View>
    </View>
  );
};

export default Header;
