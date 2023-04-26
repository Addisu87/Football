import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
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
    <View className="relative">
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
        className="relative p-1 drop-shadow-lg max-w-md mx-auto rounded-lg"
      >
        <LinearGradient
          colors={["#5ED2A0", "#339CB1"]}
          className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg"
        >
          <View className="w-full h-24">
            <View className="py-2 px-2 mx-auto items-center justify-center flex-row space-x-6">
              <Image
                source={Photo}
                className="block w-16 h-16 rounded-full drop-shadow-lg shrink-0"
              />

              <View className="text-left space-y-1">
                <Text className="text-lg text-black font-semibold">
                  {Name?.length > 14 ? `${Name.slice(0, 16)}...` : Name}
                </Text>
                <Text className="text-slate-500 font-medium">{Age}</Text>
                <Text className="text-slate-500 font-medium">{Position}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default PlayerCard;
