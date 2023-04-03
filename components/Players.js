import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import { TouchableOpacity } from "react-native-web";

const Players = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [playerStatistics, setPlayerStatistics] = useState([]);

  return (
    <TouchableOpacity onPress={() => {}}>
      <View>
        {playerStatistics.map((footballer, index) => (
          <PlayerCard
            key={index}
            Photo={{ uri: footballer?.birth?.photo }}
            Name={footballer?.player?.name}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default Players;
