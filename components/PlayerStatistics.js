import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { getPlayersData } from "../api/API";

const PlayerStatistics = () => {
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

  return (
    <View>
      {isLoading ? (
        <>
          <View className=" flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#0B646B" />
          </View>
        </>
      ) : (
        <>
          {playerInfo?.map((play) => {
            <View key={play.id}>
              <Image source={{ uri: play?.player.photo }} />
              <Text>{play?.player.name}</Text>
              <Text>{play?.player.nationality}</Text>
              <Text>{play?.statistics[0]?.team?.name}</Text>
              <Image source={{ uri: play?.statistics[0]?.team?.logo }} />
              <Text>{play?.statistics[0]?.games?.position}</Text>
              <Text>{play?.statistics[0]?.games?.appearences}</Text>
              <Text>{play?.statistics[0]?.goals?.total}</Text>
              <Text>{play?.statistics[0]?.passes?.total}</Text>
              <Text>{play?.statistics[0]?.cards?.yellowred}</Text>
            </View>;
          })}
        </>
      )}
    </View>
  );
};

export default PlayerStatistics;
