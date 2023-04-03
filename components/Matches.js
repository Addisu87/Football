import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native";
import MatchesCard from "./MatchesCard";
import { getFixturesData } from "../api/API";
import NotFound from "./NotFound";

const Matches = () => {
  const [fixtureData, setFixtureData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getFixturesData().then((game) => {
      setFixtureData(game);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="m-2 flex-row justify-between items-center">
        <Text className="font-medium text-base uppercase">
          Upcoming Matches
        </Text>
        <Text className="uppercase">View All</Text>
      </View>
      {isLoading ? (
        <>
          <View className=" flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#0B646B" />
          </View>
        </>
      ) : (
        <>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
          >
            {fixtureData?.length > 0 ? (
              <>
                {fixtureData?.map((game, index) => (
                  <MatchesCard
                    key={index}
                    teamHomeImgUrl={{ uri: game?.teams?.home?.logo }}
                    teamAwayImgUrl={{ uri: game?.teams?.away?.logo }}
                    teamHome={game?.teams?.home?.name}
                    teamAway={game?.teams?.away?.name}
                    stadiumName={game?.fixture?.venue?.name}
                  />
                ))}
              </>
            ) : (
              <>
                <NotFound />
              </>
            )}
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

export default Matches;
