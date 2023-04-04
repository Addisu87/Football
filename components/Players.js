import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from "react-native";
import PlayerCard from "./PlayerCard";
import { getPlayersData } from "../api/API";
import NotFound from "./NotFound";
import { useNavigation } from "@react-navigation/native";

const Players = ({
  Photo,
  Name,
  Nationality,
  TeamLogo,
  Position,
  Appearance,
  Passes,
  Goals,
  Cards,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [playerData, setPlayerData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    getPlayersData().then((play) => {
      setPlayerData(play);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("playerStatistics", {
            Photo,
            Name,
            Nationality,
            TeamLogo,
            Position,
            Appearance,
            Passes,
            Goals,
            Cards,
          })
        }
      >
        {isLoading ? (
          <>
            <View className=" flex-1 items-center justify-center">
              <ActivityIndicator size="large" color="#0B646B" />
            </View>
          </>
        ) : (
          <>
            {playerData.length > 0 ? (
              <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 15,
                  paddingTop: 10,
                }}
                horizontal
              >
                {playerData?.map((player, index) => (
                  <PlayerCard
                    key={index}
                    Photo={{ uri: player?.photo }}
                    Name={player?.name}
                    Nationality={player?.nationality}
                    TeamLogo={player?.statistics[0]?.team?.logo}
                    Position={player?.statistics[0]?.games?.position}
                    Appearance={player?.statistics[0]?.games?.appearances}
                    Goals={player?.statistics[0]?.goals?.total}
                    Passes={player?.statistics[0]?.passes?.total}
                    Cards={player?.statistics[0]?.cards?.yellowred}
                  />
                ))}
              </ScrollView>
            ) : (
              <>
                <NotFound />
              </>
            )}
          </>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Players;
