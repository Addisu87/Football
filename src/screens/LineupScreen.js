import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { soccerField } from "../assets/images/index";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { fetchLineups, selectLineupItems } from "../redux/slices/lineupSlice";

const LineupScreen = ({ fixtureId }) => {
  const navigation = useNavigation();
  const lineups = useSelector(selectLineupItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!lineups.length) {
      dispatch(fetchLineups(fixtureId));
    }
  }, [dispatch, fixtureId]);

  return (
    <SafeAreaView>
      {!lineups ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <>
          <TouchableOpacity
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>

          {lineups?.map((lineup) => (
            <View key={lineup.team?.id} className="flex-row space-x-2">
              <Text>{lineup.team?.name}</Text>
              <Text className="text-gray-400">{lineup?.formation}</Text>
              <Image
                source={{ uri: lineup?.team?.logo }}
                className="w-10 h-10 rounded-full"
              />

              <Text className="uppercase text-bold">Starters:</Text>
              {lineup.startXI?.map((player) => (
                <ImageBackground
                  source={soccerField}
                  className="flex-1 bg-cover justify-center items-center"
                >
                  <View key={player.player?.id}>
                    <Text>{player.player?.name}</Text>
                    <Text>{player.player?.number}</Text>
                    <Text>{player.player?.pos}</Text>
                    <Text>{player.player?.grid}</Text>
                  </View>
                </ImageBackground>
              ))}

              <Text className="uppercase text-bold">Substitutes:</Text>
              {lineup.substitutes?.map((player) => (
                <View key={player.player?.id}>
                  <Text>{player.player?.name}</Text>
                  <Text>{player.player?.number}</Text>
                  <Text>{player.player?.pos}</Text>
                </View>
              ))}
            </View>
          ))}
        </>
      )}
    </SafeAreaView>
  );
};

export default LineupScreen;
