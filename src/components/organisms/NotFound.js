import { View, Text, Image } from "react-native";
import React from "react";
import { Arsenal } from "../../assets/images";

const NotFound = () => {
  return (
    <View className="w-full h-[110px] items-center justify-center space-y-2">
      <Image source={Arsenal} className="w-20 h-20 object-cover" />
      <Text className="text-xl font-semibold text-[#00CCBB]">
        Opps ...No Data Found
      </Text>
    </View>
  );
};

export default NotFound;
