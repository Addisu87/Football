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
    dispatch(fetchPlayers(teamId));
  }, [dispatch, teamId]);

  return (
    <SafeAreaView>
      {!squad?.length ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <>
          <View className="h-[600px]">
            <ScrollView className="flex-1 p-2">
              {squad?.length > 0 ? (
                <>
                  {squad?.map((player) => (
                    <PlayerCard
                      key={player?.id}
                      Photo={{ uri: player?.photo }}
                      Name={player?.name}
                      Age={player?.age}
                      Position={player?.position}
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
