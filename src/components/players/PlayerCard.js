import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/outline";

const PlayerCard = ({
  Photo,
  Name,
  Age,
  Number,
  Nationality,
  TeamLogo,
  TeamName,
  Position,
  Appearences,
  Passes,
  Goals,
  Cards,
}) => {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 p-2">
      <View className="relative">
        <TouchableOpacity
          className="absolute top-7 left-1.5 p-2 bg-gray-100 rounded-full z-10"
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
              Number,
              Nationality,
              TeamLogo,
              TeamName,
              Position,
              Appearences,
              Passes,
              Goals,
              Cards,
            })
          }
          className="absolute top-7 right-1.5 p-2 bg-gray-100 rounded-full z-10"
        >
          <ArrowRightIcon size={20} color="#00CCBB" />
        </TouchableOpacity>

        <LinearGradient
          colors={["#60a5fa", "#34d399"]}
          className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg"
        >
          <View className="flex-row justify-evenly">
            <View className="shrink-0 p-2">
              <Image
                source={Photo}
                className="block w-16 h-16 rounded-full drop-shadow-lg shrink-0"
              />
            </View>

            <View>
              <Text className="uppercase block mt-1 text-lg leading-tight font-medium text-black ">
                {Name?.length > 12 ? `${Name.slice(0, 12)}...` : Name}
              </Text>
              <Text className="mt-2 text-slate-700">{Number}</Text>
              <Text className="mt-2 text-slate-700">{Position}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default PlayerCard;
