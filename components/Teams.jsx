import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";

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
      <ScrollView>
        <FlatList
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dummyData}
          renderItem={({ item }) => <_renderTeamsItem logo={item.logo} />}
          // renderItem={_renderTeamsItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Teams;
