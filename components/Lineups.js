import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getLineUps } from "../api/API";
import { useNavigation, useRoute } from "@react-navigation/native";
import { soccerField } from "../assets/images/index";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const Lineups = () => {
  const [lineupsData, setLineupsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    getLineUps().then((line) => {
      setLineupsData(line);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  const {
    params: { teamHome, teamAway, stadiumName, teamHomeImgUrl, teamAwayImgUrl },
  } = useRoute();

  const renderItem = ({ item }) => (
    <View key={item.id}>
      <TouchableOpacity
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>
      <View>
        <Text>{item.team.name}</Text>
        <Text>{item.coach.name}</Text>
        <Image
          source={{ uri: item.coach.photo }}
          className="w-12 h-12 rounded-full"
        />
        <Text>{item.formation}</Text>
      </View>

      <View>
        <ImageBackground
          source={soccerField}
          className="flex-1 resize-cover justify-center items-center"
        >
          <Text>{item.startXI.player.name}</Text>
          <Text>{item.startXI.player.number}</Text>
          <Text>{item.startXI.player.pos}</Text>
          <Text>{item.startXI.player.grid}</Text>
        </ImageBackground>
      </View>
    </View>
  );
  return (
    <View>
      {isLoading ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <FlatList
          data={lineupsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Lineups;
