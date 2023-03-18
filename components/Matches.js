import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { dummyTeams } from "./Teams";
import MatchesCard from "./MatchesCard";

export const dummyMatches = [
  {
    id: "001",
    name: "Strawberry Field",
    team1: dummyTeams[0],
    team2: dummyTeams[2],
  },
  {
    id: "002",
    name: "Autumn Field",
    team1: dummyTeams[3],
    team2: dummyTeams[1],
  },
  {
    id: "003",
    name: "Spring Field",
    team1: dummyTeams[4],
    team2: dummyTeams[0],
  },
  {
    id: "004",
    name: "Emirates Field",
    team1: dummyTeams[1],
    team2: dummyTeams[2],
  },
  {
    id: "005",
    name: "more 2 ...",
    team1: dummyTeams[3],
    team2: dummyTeams[0],
  },
];

const Matches = () => {
  return (
    <SafeAreaView>
      <View className="items-center justify-between flex-row m-2">
        <Text className="uppercase text-lg">Upcoming Matches</Text>
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
