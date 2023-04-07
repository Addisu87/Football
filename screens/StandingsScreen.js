import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, SafeAreaView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getStandingsData } from "../api/API";
import NotFound from "../components/NotFound";
import StandingCard from "../components/standingCard";

const StandingsScreen = () => {
  const [standingData, setStandingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getStandingsData().then((res) => {
      setStandingData(res?.league?.standings[0]);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="flex-1 p-4 pt-8 bg-white">
        {isLoading ? (
          <View className=" flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#0B646B" />
          </View>
        ) : (
          <>
            <View>
              {standingData?.length > 0 ? (
                <>
                  {standingData?.map((stand, index) => (
                    <StandingCard
                      key={index}
                      Rank={stand?.rank}
                      TeamName={stand?.team?.name}
                      TeamLogo={{ uri: stand?.team?.logo }}
                      Played={stand?.all?.played}
                      Win={stand?.all?.win}
                      Draw={stand?.all?.draw}
                      Lose={stand?.all?.lose}
                      Points={stand?.points}
                      Form={stand?.form}
                    />
                  ))}
                </>
              ) : (
                <>
                  <NotFound />
                </>
              )}
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default StandingsScreen;
