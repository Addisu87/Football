import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";
import { getPlayersData } from "../api/API";
import { ArrowLeftIcon, ShareIcon } from "react-native-heroicons/outline";
import { TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

const PlayerStatistics = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [playerInfo, setPlayerInfo] = useState();

  useEffect(() => {
    setIsLoading(true);
    getPlayersData().then((play) => {
      setPlayerInfo(play);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

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
      {isLoading ? (
        <>
          <View className=" flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#0B646B" />
          </View>
        </>
      ) : (
        <View className="relative">
          <Image source={Photo} className="w-full h-56 bg-gray-200 p-4" />

          <TouchableOpacity
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>

          <TouchableOpacity className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
            <ShareIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
          <View className="flex-row justify-between">
            <View className="flex-row space-x-2">
              <View className="space-y-1">
                <Image source={TeamLogo} className="w-10 h-10 rounded-full" />
                <Text>{TeamName}</Text>
              </View>

              <View className="text-base space-y-1">
                <Text>{Name}</Text>
                <Text>{Age}</Text>
                <Text>{Position}</Text>
                <Text>{Nationality}</Text>
              </View>
            </View>

            <View>
              <Text>{Appearance}</Text>
              <Text>{Goals}</Text>
              <Text>{Passes}</Text>
              <Text>{Cards}</Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default PlayerStatistics;
