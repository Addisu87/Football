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
  const squad = useSelector(selectPlayerItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!squad.length) {
      dispatch(fetchPlayers(teamId));
    }
  }, [dispatch, teamId]);

  return (
    <SafeAreaView>
      {!squad.length ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <>
          <ScrollView
            vertical
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
          >
            {squad?.length > 0 ? (
              <>
                {squad?.map(({ player }) => (
                  <PlayerCard
                    key={player?.id}
                    Photo={{ uri: player?.photo }}
                    Name={player?.name}
                    Age={player?.age}
                    Position={player?.position}
                    Nationality={player?.nationality}
                    TeamLogo={player?.statistics[0]?.team?.logo}
                    TeamName={player?.statistics[0]?.team?.name}
                    Appearance={player?.statistics[0]?.games?.appearences}
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
        </>
      )}
    </SafeAreaView>
  );
};

export default Players;
