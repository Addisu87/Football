import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import TeamsCard from "./TeamsCard";

import NotFound from "./NotFound";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams, selectTeamItems } from "../features/teamSlice";

const Teams = () => {
  const teams = useSelector(selectTeamItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!teams?.length) {
      dispatch(fetchTeams());
    }
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View className="p-2 flex-row justify-between items-center">
        <Text className="font-medium text-base uppercase">Popular Teams</Text>
        <Text className="uppercase">View All</Text>
      </View>

      {!teams?.length ? (
        <>
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#0B646B" />
          </View>
        </>
      ) : (
        <>
          <View className="h-[600px]">
            <ScrollView className="flex-1 p-2">
              {teams?.length > 0 ? (
                <>
                  {teams?.map((data, id) => (
                    <TeamsCard
                      key={id}
                      imgUrl={{ uri: data?.team?.logo }}
                      name={data?.team?.name}
                      foundedYear={data?.team?.founded}
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

export default Teams;
