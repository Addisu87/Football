import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getGamesData } from "../api/API";

const Games = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getGamesData().then((game) => {
      setGames(game);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <>
      <View>
        {games.map((game, index) => (
          <Text key={index}>{game.fixture.date}</Text>
        ))}
      </View>
    </>
  );
};

export default Games;
