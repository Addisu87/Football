import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const TransferCard = ({
  Photo,
  DateTrans,
  TransType,
  Name,
  TeamOut,
  TeamOutLogo,
  TeamIn,
  TeamInLogo,
}) => {
  return (
    <TouchableOpacity className="relative overflow-hidden">
      <LinearGradient
        colors={["#60a5fa", "#34d399"]}
        className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg"
      >
        <View className="max-w-md mx-auto rounded-xl shadow-soft-xl break-words">
          <View className="p-2 flex-row justify-between items-center">
            <Text className="font-medium text-base uppercase">
              Date: {DateTrans}
            </Text>
            <Text className="uppercase">Type: {TransType}</Text>
          </View>

          <View className="flex-row flex-wrap p-2">
            <View className="items-center justify-center w-1/4">
              <Text className="uppercase font-bold mb-0 text-lg leading-tight text-black">
                {Name}
              </Text>
              <Image source={Photo} />
            </View>

            <View className="shrink-0 pl-7">
              <Image
                source={TeamOutLogo}
                className="rounded w-10 h-10 object-cover"
              />
              <Text className="uppercase block mt-1 text-base leading-tight font-medium text-black ">
                Out: {TeamOut.length > 8 ? `${TeamOut.slice(0, 8)}..` : TeamOut}
              </Text>
            </View>

            <View className="shrink-0 pl-4">
              <Image
                source={TeamInLogo}
                className="rounded w-10 h-10 object-cover"
              />
              <Text className="uppercase block mt-1 text-base leading-tight font-medium text-black ">
                In: {TeamIn > 8 ? `${TeamIn.slice(0, 8)}..` : TeamIn}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default TransferCard;
