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

const Players = () => {
  const players = useSelector(selectPlayerItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!players.length) {
      dispatch(fetchPlayers());
    }
  }, [dispatch]);

  return (
    <SafeAreaView>
      {!players.length ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
          >
            {players.length > 0 ? (
              <>
                {players?.map((play, index) => (
                  <PlayerCard
                    key={index}
                    Photo={{ uri: play?.player?.photo }}
                    Name={play?.player?.name}
                    Age={play?.player?.age}
                    Nationality={play?.player?.nationality}
                    TeamLogo={play?.statistics[0]?.team?.logo}
                    TeamName={play?.statistics[0]?.team?.name}
                    Position={play?.statistics[0]?.games?.position}
                    Appearance={play?.statistics[0]?.games?.appearances}
                    Goals={play?.statistics[0]?.goals?.total}
                    Passes={play?.statistics[0]?.passes?.total}
                    Cards={play?.statistics[0]?.cards?.yellowred}
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
