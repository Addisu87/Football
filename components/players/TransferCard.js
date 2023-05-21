import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const TransferCard = ({
  Photo,
  DateTrans,
  TransType,
  Name,
  TeamIn,
  TeamOut,
  TeamInLogo,
  TeamOutLogo,
}) => {
  return (
    <View className="relative">
      <TouchableOpacity className="relative p-1 m-1 drop-shadow-lg max-w-md mx-auto rounded-xl bg-gray-200">
        <LinearGradient
          colors={["#60a5fa", "#34d399"]}
          className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg md:max-w-2xl"
        >
          <View className="w-full h-32">
            <Text className="uppercase text-lg font-bold text-left">
              {`Transfer on ${DateTrans}`}
            </Text>
            <View className="py-4 px-4 mx-auto items-center justify-center space-y-0 top-3 flex-row space-x-6">
              <Image
                source={Photo}
                className="block mx-0 h-18 rounded-full drop-shadow-lg shrink-0"
              />

              <View className="space-y-2">
                <Text className="text-lg text-black font-semibold">{Name}</Text>
                <View className="flex-row space-x-2">
                  <View>
                    <Text className="text-slate-500 font-medium">{TeamIn}</Text>
                    <Image
                      source={TeamInLogo}
                      className="w-12 h-12 rounded-full"
                    />
                  </View>
                  <ArrowRightIcon />
                  <View>
                    <Text className="text-slate-500 font-medium">
                      {TeamOut}
                    </Text>
                    <Image
                      source={TeamOutLogo}
                      className="w-12 h-12 rounded-full"
                    />
                  </View>
                </View>
                <Text className="text-base font-normal">{TransType}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default TransferCard;
