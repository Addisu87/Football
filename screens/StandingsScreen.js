import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import { getStandingsData } from "../api/API";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const StandingScreen = () => {
  const [tableData, setTableData] = useState([]);
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
      setTableData(res[0]?.league?.standings[0]);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  const renderTableRow = ({ item }) => {
    return (
      <View className="flex-row mb-2">
        <Text className="flex-none">{item?.rank}</Text>
        <View className="flex-4 space-x-2">
          <Image
            source={{ uri: item.team?.logo }}
            className="w-3 h-3 rounded-full"
          />
          <Text>
            {item.team?.name?.length > 9
              ? `${item.team?.name.slice(0, 9)}...`
              : item.team?.name}
          </Text>
        </View>
        <Text className="flex-1">{item.all?.played}</Text>
        <Text className="flex-1">{item.all?.win}</Text>
        <Text className="flex-1">{item.all?.draw}</Text>
        <Text className="flex-1">{item.all?.lose}</Text>
        <Text className="flex-1">{item?.goalsDiff}</Text>
        <Text className="flex-1">{item?.points}</Text>
      </View>
    );
  };

  return (
    <View className="flex-1 p-2">
      <LinearGradient
        colors={["#5ED2A0", "#339CB1"]}
        className="pl-4 pr-4 rounded-md h-90"
      >
        {isLoading ? (
          <View className=" flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#00CCBB" />
          </View>
        ) : (
          <View>
            <View>
              <Text>Premier League</Text>
            </View>
            <View className="flex-row mb-2.5 bg-[#00CCBB]">
              <Text className="font-bold flex-1">Pos</Text>
              <Text className="font-bold flex-4">Team</Text>
              <Text className="font-bold flex-1">P</Text>
              <Text className="font-bold flex-1">W</Text>
              <Text className="font-bold flex-1">D</Text>
              <Text className="font-bold flex-1">L</Text>
              <Text className="font-bold flex-1">GD</Text>
              <Text className="font-bold flex-1">Pts</Text>
            </View>
            <FlatList
              data={tableData}
              keyExtractor={(item) => item.team_id}
              renderItem={renderTableRow}
            />
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

export default StandingScreen;
