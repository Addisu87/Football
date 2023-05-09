import React, { useEffect } from "react";
import {
  View,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from "react-native";
import PlayerCard from "./PlayerCard";
import NotFound from "./NotFound";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayers, selectPlayerItems } from "../features/playerSlice";

const Players = ({ teamId }) => {
  // Access the squad of players from the state
  const squad = useSelector(selectPlayerItems);
  const dispatch = useDispatch();

  // Fetch the squad of players for the selected team from the API
  useEffect(() => {
    dispatch(fetchPlayers(teamId));
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
              {squad?.length > 0 ? (
                <>
                  {squad?.map((player, index) => (
                    <PlayerCard
                      key={index}
                      Photo={{ uri: player?.player?.photo }}
                      Name={player?.player?.name}
                      Age={player?.player?.age}
                      Nationality={player?.player?.nationality}
                      TeamLogo={player?.statistics[0]?.team?.logo}
                      TeamName={player?.statistics[0]?.team?.name}
                      Position={player?.statistics[0]?.games?.position}
                      Appearences={player?.statistics[0]?.games?.appearences}
                      Goals={player?.statistics[0]?.goals?.total}
                      Passes={player?.statistics[0]?.passes?.total}
                      Cards={player?.statistics[0]?.cards?.red}
                    />
                  ))}
                </>
              ) : (
                <>
                  <NotFound />
                </>
              )}
            </ScrollView>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Players;
