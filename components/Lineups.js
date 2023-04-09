import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getLineUps } from "../api/API";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { soccerField } from "../assets/images/index";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const Lineups = () => {
  const [lineups, setLineUps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    getLineUps().then((res) => {
      setLineUps(res);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  const renderItem = ({ item }) => (
    <View key={item.id}>
      <TouchableOpacity
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>
      <View>
        <View>
          <Text className="uppercase text-bold text-gray-400">Coach</Text>
          <View className="flex-row justify-between">
            <Image
              source={{ uri: item?.coach?.photo }}
              className="w-10 h-10 rounded-full"
            />
            <Text>{item?.coach?.name}</Text>
          </View>
        </View>
      </View>

      <View>
        <Text className="uppercase text-bold text-gray-400">StartingXI</Text>
        <ImageBackground
          source={soccerField}
          className="flex-1 bg-cover justify-center items-center"
        >
          <Text>{item?.startXI?.player?.name}</Text>
          <Text>{item.startXI?.player?.number}</Text>
          <Text>{item.startXI?.player?.pos}</Text>
          <Text>{item.startXI?.player?.grid}</Text>
        </ImageBackground>
      </View>

      <View>
        <View>
          <Text className="uppercase text-bold text-gray-400">Substitutes</Text>
        </View>
        <View className="flex-row">
          <Text>{item.substitutes?.player?.name}</Text>
          <Text>{item.substitutes?.player?.number}</Text>
          <Text>{item.substitutes?.player?.pos}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView>
      {isLoading ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <View>
          {lineups?.map((lineup) => (
            <View key={lineup?.team?.id} className="flex-row justify-between">
              <View>
                <View className="flex-row space-x-2">
                  <Text className="uppercase text-bold">
                    {lineup?.team?.name}
                  </Text>
                  <Text className="text-gray-400">{lineup?.formation}</Text>
                </View>

                <Image
                  source={{ uri: lineup?.team?.logo }}
                  className="w-10 h-10 rounded-full"
                />
              </View>
              <FlatList
                data={lineup}
                renderItem={renderItem}
                keyExtractor={(item) => item?.id.substring()}
              />
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default Lineups;
