import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Widgets = () => {
  const [league, setLeague] = useState(39);

  const handleLeagueChange = (id) => {
    setLeague(id);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handleLeagueChange(39)} className="p-3">
        <Text>England - Premier League</Text>
      </TouchableOpacity>
      <View
        id="wg-api-football-standings"
        data-host="v3.football.api-sports.io"
        data-key="95f8210a47b0bc73dcba2614e4c2cb9f"
        data-league={league}
        data-team=""
        data-season="2022"
        data-theme=""
        data-refresh="15"
        data-show-errors="false"
        data-show-logos="true"
        className="border border-t-sky-700 m-3"
      ></View>
    </View>
  );
};

export default Widgets;
