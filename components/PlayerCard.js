import { View, Text } from "react-native";
import React from "react";

const PlayerCard = ({ Photo }) => {
  return (
    <View>
      <Text>PlayerCard</Text>
      <Image source={Photo} className="w-10 h-10 rounded-full" />
    </View>
  );
};

export default PlayerCard;
