import { View, Text } from "react-native";
import React from "react";

const StandingDetails = () => {
  const tableData = {
    tableHead: ["Rank", "Team", "MP", "W", "D", "L", "P"],
    widthArr: [140, 160, 180, 120, 220, 220, 540],
    tableData: [
      ["1", "Arsenal", "21", "15", "4", "1", "65"],
      ["2", "Man United", "21", "14", "1", "6", "59"],
      ["3", "Chelsea", "21", "10", "5", "6", "45"],
    ],
  };
  return <View></View>;
};

export default StandingDetails;
