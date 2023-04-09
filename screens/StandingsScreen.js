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
      <View className="flex-row space-y-2 items-center justify-center">
        <View className="flex-initial w-[10%]">
          <Text>{item?.rank}</Text>
        </View>
        <View className="flex-row w-[30%] space-x-2 items-center">
          <Image
            source={{ uri: item.team?.logo }}
            className="w-4 h-4 rounded-full"
          />
          <Text>
            {item.team?.name?.length > 9
              ? `${item.team?.name.slice(0, 9)}..`
              : item.team?.name}
          </Text>
        </View>
        <View className="flex-initial w-[10%]">
          <Text>{item.all?.played}</Text>
        </View>
        <View className="flex-initial w-[10%]">
          <Text>{item.all?.win}</Text>
        </View>
        <View className="flex-initial w-[10%]">
          <Text>{item.all?.draw}</Text>
        </View>
        <View className="flex-initial w-[10%]">
          <Text>{item.all?.lose}</Text>
        </View>
        <View className="flex-initial w-[10%]">
          <Text>{item?.goalsDiff}</Text>
        </View>
        <View className="flex-initial w-[10%]">
          <Text>{item?.points}</Text>
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 p-2">
      <LinearGradient
        colors={["#5ED2A0", "#339CB1"]}
        className="pl-4 pr-4 rounded-md h-full"
      >
        {isLoading ? (
          <View className=" flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#00CCBB" />
          </View>
        ) : (
          <View>
            <View className="mb-3">
              <Text className="font-bold uppercase">
                England - Premier League
              </Text>
            </View>
            <View className="flex-row mb-2 bg-[#00CCBB] items-center justify-center">
              <View className="flex-initial w-[10%]">
                <Text className="font-semibold">Pos</Text>
              </View>
              <View className="flex-initial w-[30%]">
                <Text className="font-semibold">Team</Text>
              </View>
              <View className="flex-initial w-[10%]">
                <Text className="font-semibold">P</Text>
              </View>
              <View className="flex-initial w-[10%]">
                <Text className="font-semibold">W</Text>
              </View>
              <View className="flex-initial w-[10%]">
                <Text className="font-semibold">D</Text>
              </View>
              <View className="flex-initial w-[10%]">
                <Text className="font-semibold">L</Text>
              </View>
              <View className="flex-initial w-[10%]">
                <Text className="font-semibold">GD</Text>
              </View>
              <View className="flex-initial w-[10%]">
                <Text className="font-semibold">Pts</Text>
              </View>
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
