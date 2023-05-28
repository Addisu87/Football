import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import IonIcons from "react-native-vector-icons/Ionicons";

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
            <Text className="font-thin text-base uppercase">
              Date: {DateTrans}
            </Text>
            <Text className="uppercase">Type:{TransType}</Text>
          </View>

          <View className="flex-row flex-wrap p-1">
            <View className="items-center justify-center w-1/4">
              <Text className="uppercase font-medium mb-0 text-lg leading-tight text-black">
                {Name}
              </Text>
              <Image source={Photo} />
            </View>

            <View className="shrink-0 pl-7 w-1/4">
              <Image
                source={TeamOutLogo}
                className="rounded w-6 h-6 object-cover"
              />

              <Text className="uppercase block mt-1 text-base leading-tight font-normal text-black ">
                {TeamOut.length > 3 ? `${TeamOut.slice(0, 3)}..` : TeamOut}
              </Text>
            </View>

            <View className="items-center justify-center p-2">
              <View className="flex-col items-center">
                <IonIcons name="arrow-redo-circle-sharp" size={24} />
              </View>
            </View>

            <View className="shrink-0 pl-4 w-1/4">
              <Image
                source={TeamInLogo}
                className="rounded w-6 h-6 object-cover"
              />
              <Text className="uppercase block mt-1 text-base leading-tight font-normal text-black ">
                {TeamIn.length > 3 ? `${TeamIn.slice(0, 3)}..` : TeamIn}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default TransferCard;
