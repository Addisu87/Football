import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import MatchesCard from "./MatchesCard";
import { fetchMatch, selectMatchItems } from "../../features/matchSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const Matches = () => {
  const match = useSelector(selectMatchItems);
  const dispatch = useDispatch();
  const sortedMatches = [...match].sort((a, b) =>
    moment(a.fixture.date).diff(moment(b.fixture.date))
  );

  // show all match
  useEffect(() => {
    if (!sortedMatches?.length) {
      dispatch(fetchMatch());
    }
  }, [dispatch]);

  return (
    <>
      <SafeAreaView>
        <View className="m-2 flex-row justify-between items-center">
          <Text className="font-medium text-base uppercase">
            Upcoming Matches
          </Text>
          <Text className="uppercase">View All</Text>
        </View>
        {!sortedMatches?.length ? (
          <>
            <View className=" flex-1 items-center justify-center">
              <ActivityIndicator size="large" color="#0B646B" />
            </View>
          </>
        ) : (
          <>
            <View className="h-[600px]">
              <ScrollView className="flex-1 p-2">
                {sortedMatches?.map((game, index) => (
                  <MatchesCard
                    key={index}
                    teamHomeImgUrl={{ uri: game?.teams?.home?.logo }}
                    teamAwayImgUrl={{ uri: game?.teams?.away?.logo }}
                    teamHome={game?.teams?.home?.name}
                    teamAway={game?.teams?.away?.name}
                    stadiumName={game?.fixture?.venue?.name}
                    gameDate={game?.fixture?.date}
                    goalHome={game?.goals?.home}
                    goalAway={game?.goals?.away}
                    leagueName={game?.league?.name}
                    season={game?.league?.season}
                    country={game?.league?.country}
                  />
                ))}
              </ScrollView>
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default Matches;
