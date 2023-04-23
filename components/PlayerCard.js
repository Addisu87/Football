import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

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
    <View className="relative">
      <TouchableOpacity
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>

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
        className="relative p-2 m-1 drop-shadow-lg max-w-md mx-auto rounded-xl overflow-hidden bg-gray-200"
      >
        <LinearGradient
          colors={["#5ED2A0", "#339CB1"]}
          className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg md:max-w-2xl"
        >
          <View className="w-40 h-60">
            <View className="items-center justify-center space-y-2 top-3">
              <View>
                <Image
                  source={Photo}
                  className="w-24 h-24 rounded-full drop-shadow-lg"
                />
              </View>
              <View className="space-y-2">
                <Text className="text-neutral-700 dark:text-neutral-800">
                  Name: {Name}
                </Text>
                <Text className="text-neutral-700 dark:text-neutral-800">
                  Age: {Age}
                </Text>
                <Text className="text-neutral-700 dark:text-neutral-800">
                  Position: {Position}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default PlayerCard;
