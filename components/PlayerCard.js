import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
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
      className="relative p-2 m-2 drop-shadow-lg max-w-md mx-auto rounded-xl overflow-hidden bg-gray-200"
    >
      <LinearGradient
        colors={["#5ED2A0", "#339CB1"]}
        className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg md:max-w-2xl"
      >
        <View className="w-32 h-40">
          <View className="items-center justify-center">
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
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PlayerCard;
