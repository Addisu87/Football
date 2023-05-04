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
        className="relative p-1 drop-shadow-lg max-w-md mx-auto rounded-lg cursor-pointer"
      >
        <LinearGradient
          colors={["#5ED2A0", "#339CB1"]}
          className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg"
        >
          <View className="mx-auto rounded-xl drop-shadow-lg overflow-hidden">
            <View className="flex-row space-x-2">
              <View className="p-2">
                <TouchableOpacity
                  className="absolute top-5 p-2 bg-gray-100 rounded-full"
                  onPress={() => navigation.goBack()}
                >
                  <ArrowLeftIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
              </View>

              <View className="shrink-0 p-2">
                <Image
                  source={Photo}
                  className="block w-16 h-16 rounded-full drop-shadow-lg shrink-0"
                />
              </View>

              <View className="p-2 pl-4">
                <Text className="uppercase block mt-1 text-lg leading-tight font-medium text-black ">
                  {Name?.length > 14 ? `${Name.slice(0, 16)}...` : Name}
                </Text>
                <Text className="mt-2 text-slate-700">{Age}</Text>
                <Text className="mt-2 text-slate-700">{Position}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default PlayerCard;
