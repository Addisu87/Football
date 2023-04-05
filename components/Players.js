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
  Age,
  Nationality,
  TeamLogo,
  TeamName,
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
            TeamName,
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
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Players;
