import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const PlayerCard = ({
  Photo,
  Name,
  Age,
  Nationality,
  TeamLogo,
  TeamName,
  Position,
  Appearance,
  Passes,
  Goals,
  Cards,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("playerStatistics", {
          Photo,
          Name,
          Age,
          Nationality,
          TeamLogo,
          TeamName,
          Position,
          Appearance,
          Passes,
          Goals,
          Cards,
        })
      }
      className="bg-white mr-3 shadow"
    >
      <View className="grid grid-cols-2 gap-4">
        <View className="items-center justify-center flex-row space-x-2">
          <View>
            <Image
              source={Photo}
              className="w-20 h-20 rounded-full drop-shadow-lg"
            />
          </View>
          <View className="space-y-1">
            <Text className="text-neutral-700 dark:text-neutral-800">
              {Name}
            </Text>
            <Text className="text-neutral-700 dark:text-neutral-800">
              {Age}
            </Text>
            <Text className="text-neutral-700 dark:text-neutral-800">
              {Position}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlayerCard;
