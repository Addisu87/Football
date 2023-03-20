import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import TeamsCard from "./TeamsCard";

export const dummyTeams = [
  {
    id: "001",
    name: "Real Madrid",
    logo: require("../assets/images/Real_Madrid.png"),
  },
  {
    id: "002",
    name: "Arsenal",
    logo: require("../assets/images/Arsenal_FC.png"),
  },
  {
    id: "003",
    name: "FC Barcelona",
    logo: require("../assets/images/FC_Barcelona.png"),
  },
  {
    id: "004",
    name: "Juventus",
    logo: require("../assets/images/juventus-fc.png"),
  },
  {
    id: "005",
    name: "Manchester United",
    logo: require("../assets/images/manchester-city-fc-logo.png"),
  },
];

const Teams = () => {
  return (
    <SafeAreaView>
      <View className="p-2 flex-row justify-between items-center">
        <Text className="font-medium text-base uppercase">Popular Teams</Text>
        <Text className="uppercase">View All</Text>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {dummyTeams.map(({ name, logo, id }) => (
          <TeamsCard key={id} imgUrl={logo} name={name} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Teams;
