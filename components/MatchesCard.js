import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const MatchesCard = ({ item }) => {
  return (
    <TouchableOpacity>
      <View>
        <Text className="text-bold text-slate-800">{item.name}</Text>
        <View>
          <Image source={item.team1.logo} className="w-7 h-7" />
          <Image source={item.team2.logo} className="w-7 h-7" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MatchesCard;
