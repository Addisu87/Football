import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const TeamsCard = ({ imgUrl, name, foundedYear, Photo, Name }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Players", { Photo, Name })}
      className="relative overflow-hidden"
    >
      <LinearGradient
        colors={["#5ED2A0", "#339CB1"]}
        className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg"
      >
        <View className="max-w-md mx-auto rounded-xl drop-shadow-lg overflow-hidden">
          <View className="flex-row">
            <View className="shrink-0 p-2">
              <Image
                source={imgUrl}
                className="rounded w-24 h-24 object-cover"
              />
            </View>
            <View className="p-8">
              <Text className="uppercase block mt-1 text-lg leading-tight font-medium text-black ">
                {name}
              </Text>
              <View className="mt-2 text-slate-500">
                <Text>{`Est. ${foundedYear}`}</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default TeamsCard;
