import React, { useEffect } from "react";
import {
  View,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerCard from "./PlayerCard";
import {
  fetchPlayers,
  selectPlayerLists,
} from "../../redux/slices/playerSlice";

const Players = () => {
  // Access the squad of players from the state
  const squad = useSelector(selectPlayerLists);
  const dispatch = useDispatch();

  const teamId = "33";

  // Fetch the squad of players for the selected team from the API
  useEffect(() => {
    if (!squad.length) {
      dispatch(fetchPlayers(teamId));
    }
  }, [dispatch, teamId]);

  return (
    <SafeAreaView>
      {!squad?.length ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <>
          <View className="h-[600px]">
            <ScrollView className="flex-1 p-2">
              <>
                {squad?.map((play, index) => (
                  <PlayerCard
                    key={index}
                    Photo={{ uri: play?.players?.photo }}
                    Name={play?.players?.name}
                    Age={play?.players?.age}
                    Number={play?.players?.number}
                    Position={play?.players?.position}
                    // Nationality={play?.player?.nationality}
                    // TeamLogo={play?.statistics[0]?.team?.logo}
                    // TeamName={play?.statistics[0]?.team?.name}
                    // Position={play?.statistics[0]?.games?.position}
                    // Appearences={play?.statistics[0]?.games?.appearences}
                    // Goals={play?.statistics[0]?.goals?.total}
                    // Passes={play?.statistics[0]?.passes?.total}
                    // Cards={play?.statistics[0]?.cards?.red}
                  />
                ))}
              </>
            </ScrollView>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Players;
