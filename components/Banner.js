import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { LifebuoyIcon } from "react-native-heroicons/outline";
import { Messi } from "../assets/images/index";

const Banner = () => {
  return (
    <View>
      <LinearGradient
        colors={["#5ED2A0", "#339CB1"]}
        className="pl-4 pr-4 rounded-md h-40"
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
            <Image className="w-36 h-36" source={Messi} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Banner;
