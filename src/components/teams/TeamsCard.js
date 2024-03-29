import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const TeamsCard = ({
  imgUrl,
  name,
  foundedYear,
  Photo,
  Name,
  Age,
  Position,
  Number,
}) => {
  const navigation = useNavigation();

  return (
    <View className="relative">
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Players", {
            Photo,
            Name,
            Age,
            Position,
            Number,
          })
        }
        className="absolute top-7 right-2 p-1.5 bg-gray-100 rounded-full overflow-hidden z-10"
      >
        <ArrowRightIcon size={20} color="#00CCBB" />
      </TouchableOpacity>

      <LinearGradient
        colors={["#60a5fa", "#34d399"]}
        className="m-2 max-w-md mx-auto rounded-2xl bg-clip-border min-w-0"
      >
        <View className="max-w-md mx-auto rounded-xl shadow-soft-xl break-words">
          <View className="flex-auto p-4">
            <View className="flex-row flex-wrap -mx-3">
              <View className="shrink-0 w-1/4 px-3 max-w-full ">
                <Image
                  source={imgUrl}
                  className="rounded w-12 h-12 object-cover"
                />
              </View>
              <View className="w-2/3 max-w-full px-3 ml-auto text-right flex-0">
                <Text className="uppercase font-bold mb-0 text-lg leading-tight text-black">
                  {name}
                </Text>
                <View className="leading-normal text-sm font-weight-bold text-lime-500">
                  <Text>{`Est. ${foundedYear}`}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default TeamsCard;
