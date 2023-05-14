import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import TeamsCard from "./TeamsCard";

import { useDispatch, useSelector } from "react-redux";
import { fetchTeams, selectTeamItems } from "../features/teamSlice";

const Teams = () => {
  const teams = useSelector(selectTeamItems);
  const dispatch = useDispatch();

  const sortedTeams = [...teams].sort((a, b) =>
    a.team?.name?.localeCompare(b.team?.name)
  );

  useEffect(() => {
    if (!sortedTeams?.length) {
      dispatch(fetchTeams());
    }
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View className="p-2 flex-row justify-between items-center">
        <Text className="font-medium text-base uppercase">Popular Teams</Text>
        <Text className="uppercase">View All</Text>
      </View>

      {!sortedTeams?.length ? (
        <>
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#0B646B" />
          </View>
        </>
      ) : (
        <>
          <View className="h-[550px]">
            <ScrollView className="flex-1 p-2">
              <>
                {sortedTeams?.length > 0 &&
                  sortedTeams?.map((data, id) => (
                    <TeamsCard
                      key={id}
                      imgUrl={{ uri: data?.team?.logo }}
                      name={data?.team?.name}
                      foundedYear={data?.team?.founded}
                    />
                  ))}
              </>
            </ScrollView>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Teams;
