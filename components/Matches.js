import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { dummyTeams } from "./Teams";
import MatchesCard from "./MatchesCard";

export const dummyMatches = [
  {
    id: "001",
    name: "Santiago Bernabéu",
    team1: dummyTeams[0],
    team2: dummyTeams[2],
  },
  {
    id: "002",
    name: "Allianz",
    team1: dummyTeams[3],
    team2: dummyTeams[1],
  },
  {
    id: "003",
    name: "Etihad Stadium",
    team1: dummyTeams[4],
    team2: dummyTeams[0],
  },
  {
    id: "004",
    name: "Emirates",
    team1: dummyTeams[1],
    team2: dummyTeams[2],
  },
  {
    id: "005",
    name: "Camp Nou",
    team1: dummyTeams[2],
    team2: dummyTeams[3],
  },
];

const Matches = () => {
  return (
    <SafeAreaView>
      <View className="m-2 flex-row justify-between items-center">
        <Text className="font-medium text-base uppercase">
          Upcoming Matches
        </Text>
        <Text className="uppercase">View All</Text>
      </View>
      <ScrollView>
        <FlatList
          data={dummyMatches}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
          keyExtractor={(item) => item.id}
          renderItem={MatchesCard}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Matches;
