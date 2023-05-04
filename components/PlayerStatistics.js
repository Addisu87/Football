import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { ArrowLeftIcon, ShareIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const PlayerStatistics = () => {
  const navigation = useNavigation();

  const {
    params: {
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
    },
  } = useRoute();

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={Photo}
          className="w-full h-56 bg-gray-200 p-4 object-cover"
        />

        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>

        <TouchableOpacity className="absolute top-14 right-5 p-2 bg-gray-100 rounded-full">
          <ShareIcon size={20} color="#00CCBB" />
        </TouchableOpacity>

        <LinearGradient
          colors={["#5ED2A0", "#339CB1"]}
          className="m-2 max-w-md mx-auto h-full rounded-xl overflow-hidden drop-shadow-lg"
        >
          <View className="max-w-md mx-auto rounded-xl drop-shadow-lg overflow-hidden">
            <View className="flex-row">
              <View className="space-y-1">
                <Image
                  source={TeamLogo}
                  className="rounded w-16 h-16 object-cover"
                />
                <Text className="uppercase block mt-1 text-lg leading-tight font-medium text-black">
                  {TeamName}
                </Text>
              </View>

              <View className="p-2 pl-4">
                <Text className="uppercase block mt-1 text-lg leading-tight font-medium text-black">
                  Name: {Name}
                </Text>
                <Text className="mt-2 text-slate-700">Age: {Age}</Text>
                <Text className="mt-2 text-slate-700">
                  Position: {Position}
                </Text>
                <Text className="mt-2 text-slate-700">
                  Nationality: {Nationality}
                </Text>
                <Text className="mt-2 text-slate-700">
                  Appearance: {Appearance}
                </Text>
                <Text className="mt-2 text-slate-700">Goals: {Goals}</Text>
                <Text className="mt-2 text-slate-700">Passes: {Passes}</Text>
                <Text className="mt-2 text-slate-700">Cards: {Cards}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default PlayerStatistics;
