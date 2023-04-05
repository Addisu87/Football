import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { getGamesData } from "../api/API";

const Game = () => {
  const [game, setGame] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getGamesData().then((play) => {
      setGame(play);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <View>
      {isLoading ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <View>
          {game?.map((play, index) => (
            <Text key={index}>{play?.fixture?.date}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Game;
