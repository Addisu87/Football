import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native";
import TeamsCard from "./TeamsCard";
import { getTeamData } from "../api/API";
import NotFound from "./NotFound";

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
    name: "Manchester City",
    logo: require("../assets/images/manchester-city-fc-logo.png"),
  },
];

const Teams = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mainTeam, setMainTeam] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getTeamData().then((team) => {
      setMainTeam(team);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="p-2 flex-row justify-between items-center">
        <Text className="font-medium text-base uppercase">Popular Teams</Text>
        <Text className="uppercase">View All</Text>
      </View>

      {isLoading ? (
        <>
          <View className=" flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#0B646B" />
          </View>
        </>
      ) : (
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {mainTeam?.length > 0 ? (
            <View>
              {mainTeam?.map(({ id, name, logo, founded }) => (
                <TeamsCard
                  key={id}
                  imgUrl={{ uri: logo }}
                  name={name}
                  foundedYear={founded}
                />
              ))}
            </View>
          ) : (
            <View>
              <NotFound />
            </View>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Teams;
