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
import { useNavigation } from "@react-navigation/native";
import { soccerField } from "../assets/images/index";

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

  const renderItem = ({ item }) => (
    <View key={item.id}>
      <View>
        <Text>{item.team.name}</Text>
        <Text>{item.coach.name}</Text>
        <Text>{item.coach.photo}</Text>
        <Text>{item.formation}</Text>
      </View>

      <View>
        <ImageBackground source={soccerField}>
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Lineups", {});
          }}
        >
          <FlatList
            data={lineupsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Lineups;
