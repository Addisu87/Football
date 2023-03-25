import { View, Text, Image } from "react-native";
import React from "react";
import { Messi } from "../assets/images";

const NotFound = () => {
  return (
    <View className="w-full h-[600px] items-center justify-center space-y-8">
      {/* <Image source={Messi} className="w-32 h-32 object-contain" /> */}
      <Text>Opps ...No Data Found</Text>
    </View>
  );
};

export default NotFound;
