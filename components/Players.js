import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, SafeAreaView } from "react-native";
import PlayerCard from "./PlayerCard";
import { getPlayersData } from "../api/API";
import NotFound from "./NotFound";

const Players = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getPlayersData().then((play) => {
      setPlayerData(play);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView>
      {isLoading ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <>
          {playerData.length > 0 ? (
            <View>
              {playerData?.map((play, index) => (
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
            </View>
          ) : (
            <>
              <NotFound />
            </>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default Players;
