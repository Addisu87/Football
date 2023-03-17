import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import TeamsCard from "./TeamsCard";

const dummyData = [
  {
    id: "001",
    name: "Real Madrid",
    logo: require("../assets/images/index"),
  },
  {
    id: "002",
    name: "Arsenal",
    logo: require("../assets/images/index"),
  },
  {
    id: "003",
    name: "FC Barcelona",
    logo: require("../assets/images/index"),
  },
  {
    id: "004",
    name: "Juventus",
    logo: require("../assets/images/index"),
  },
  {
    id: "005",
    name: "Manchester United",
    logo: require("../assets/images/index"),
  },
];

const _renderTeamsItem = ({ logo }) => {
  <View>
    <Image source={logo} />
  </View>;
};

const Teams = () => {
  return (
    <SafeAreaView>
      <Text>Popular Teams</Text>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <TeamsCard
          imgUrl="https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png"
          name="Arsenal-1"
        />
        <TeamsCard
          imgUrl="https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png"
          name="Arsenal-2"
        />
        <TeamsCard
          imgUrl="https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png"
          name="Arsenal-3"
        />
        <TeamsCard
          imgUrl="https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png"
          name="Arsenal-3"
        />
        <TeamsCard
          imgUrl="https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png"
          name="Arsenal-3"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Teams;
