import { View, TouchableOpacity } from "react-native";
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
            <View>
              {playerData?.map((player) => (
                <PlayerCard
                  key={player?.id}
                  Photo={{ uri: player?.birth?.photo }}
                  Name={player?.name}
                />
              ))}
            </View>
          </>
        ) : (
          <>
            <NotFound />
          </>
        )}
      </TouchableOpacity>
    </>
  );
};

export default Players;
