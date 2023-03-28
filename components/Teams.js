import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native";
import TeamsCard from "./TeamsCard";
import { getTeamData } from "../api/API";
import NotFound from "./NotFound";

const Teams = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mainTeam, setMainTeam] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getTeamData().then((team) => {
      setMainTeam(team);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="p-2 flex-row justify-between items-center">
        <Text className="font-medium text-base uppercase">Popular Teams</Text>
        <Text className="uppercase">View All</Text>
      </View>

      {isLoading ? (
        <>
          <View className=" flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#0B646B" />
          </View>
        </>
      ) : (
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {mainTeam?.length > 0 ? (
            <>
              {mainTeam?.map((data, id) => (
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
      )}
    </SafeAreaView>
  );
};

export default Teams;
