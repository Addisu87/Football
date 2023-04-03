import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import { getPlayersData } from "../api/API";
import NotFound from "./NotFound";

const Players = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getPlayersData().then((play) => {
      setPlayerData(play);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <>
      <TouchableOpacity onPress={() => {}}>
        {isLoading ? (
          <>
            <View className=" flex-1 items-center justify-center">
              <ActivityIndicator size="large" color="#0B646B" />
            </View>
          </>
        ) : (
          <>
            {playerData.length > 0 ? (
              <View>
                {playerData?.map((player) => (
                  <PlayerCard
                    key={player?.id}
                    Photo={{ uri: player?.photo }}
                    Name={player?.name}
                  />
                ))}
              </View>
            ) : (
              <>
                <NotFound />
              </>
            )}
          </>
        )}
      </TouchableOpacity>
    </>
  );
};

export default Players;
