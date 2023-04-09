import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getLineUps } from "../api/API";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { soccerField } from "../assets/images/index";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { FlashList } from "@shopify/flash-list";

const Lineups = () => {
  const [lineUps, setLineUps] = useState([]);
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
    <View>
      <TouchableOpacity
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>
      {item?.map((lineup, index) => {
        <View key={index}>
          <View className="flex-row justify-between">
            <View className="flex-row space-x-2">
              <Text className="uppercase text-bold">{lineup?.team?.name}</Text>
              <Text className="text-gray-400">{lineup?.formation}</Text>
            </View>
            <Image
              source={{ uri: lineup?.team?.logo }}
              className="w-10 h-10 rounded-full"
            />
          </View>

          {/* <View>
            <Text className="uppercase text-bold text-gray-400">Coach</Text>
            {lineup.coach.map((manager, index) => {
              <View key={index} className="flex-row justify-between">
                <Image
                  source={{ uri: manager?.photo }}
                  className="w-10 h-10 rounded-full"
                />
                <Text>{manager?.name}</Text>
              </View>;
            })}
          </View>

          {lineup.startXI.map((play, index) => {
            <View key={index}>
              <Text className="uppercase text-bold text-gray-400">
                StartingXI
              </Text>
              <ImageBackground
                source={soccerField}
                className="flex-1 bg-cover justify-center items-center"
              >
                <Text>{play.player?.name}</Text>
                <Text>{play.player?.number}</Text>
                <Text>{play.player?.pos}</Text>
                <Text>{play.player?.grid}</Text>
              </ImageBackground>
            </View>;
          })}

          {lineup?.substitutes?.map((sub, index) => {
            <View key={index}>
              <Text className="uppercase text-bold text-gray-400">
                Substitutes
              </Text>
              <View className="flex-row">
                <Text>{sub.player?.name}</Text>
                <Text>{sub.player?.number}</Text>
                <Text>{sub.player?.pos}</Text>
              </View>
            </View>;
          })} */}
        </View>;
      })}
    </View>
  );

  return (
    <View>
      {isLoading ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <>
          <FlashList
            data={lineUps}
            renderItem={renderItem}
            keyExtractor={(item) => item.team?.id.toString()}
            estimatedItemSize={50}
          />
        </>
      )}
    </View>
  );
};

export default Lineups;
