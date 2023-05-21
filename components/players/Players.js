import React, { useEffect } from "react";
import {
  View,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from "react-native";
import PlayerCard from "./PlayerCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayers, selectPlayerLists } from "../../features/playerSlice";

const Players = () => {
  // Access the squad of players from the state
  const squad = useSelector(selectPlayerLists);
  const dispatch = useDispatch();

  // Fetch the squad of players for the selected team from the API
  useEffect(() => {
    dispatch(fetchPlayers());
  }, [dispatch]);

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
              {squad?.length > 0 &&
                squad.map((player, index) => (
                  <PlayerCard
                    key={index}
                    Photo={{ uri: player?.players?.photo }}
                    Name={player?.players?.name}
                    Age={player?.players?.age}
                    Position={player?.players?.position}
                    Number={player?.players?.number}
                    // Nationality={player?.player?.nationality}
                    // TeamLogo={player?.statistics[0]?.team?.logo}
                    // TeamName={player?.statistics[0]?.team?.name}
                    // Position={player?.statistics[0]?.games?.position}
                    // Appearences={player?.statistics[0]?.games?.appearences}
                    // Goals={player?.statistics[0]?.goals?.total}
                    // Passes={player?.statistics[0]?.passes?.total}
                    // Cards={player?.statistics[0]?.cards?.red}
                  />
                ))}
            </ScrollView>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Players;
