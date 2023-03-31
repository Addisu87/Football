import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getStandingsData } from "../api/API";
import NotFound from "../components/NotFound";

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
    getStandingsData().then((rank) => {
      setStandingData(rank);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="flex-1 p-4 pt-8 bg-white">
        {isLoading ? (
          <>
            <View className=" flex-1 items-center justify-center">
              <ActivityIndicator size="large" color="#0B646B" />
            </View>
          </>
        ) : (
          <>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
            >
              {standingData?.length > 0 ? (
                <>
                  {standingData?.map((stand, id) => {
                    <standingDetail
                      key={id}
                      Rank={stand.rank}
                      Team={stand.name}
                      Played={stand.played}
                      Win={stand.win}
                      Draw={stand.draw}
                      Lose={stand.lose}
                      Points={stand.points}
                      Form={stand.form}
                    />;
                  })}
                </>
              ) : (
                <>
                  <NotFound />
                </>
              )}
            </ScrollView>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default StandingsScreen;
