import React, { useEffect, useLayoutEffect } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { useDispatch, useSelector } from "react-redux";
import { fetchStandings, selectStandingItems } from "../features/standingSlice";

const StandingScreen = () => {
  const navigation = useNavigation();
  const standings = useSelector(selectStandingItems);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    if (!standings.length) {
      dispatch(fetchStandings());
    }
  }, [dispatch, standings]);

  const renderTableRow = ({ item }) => {
    return (
      <View
        key={item.team?.id}
        className="flex-row space-y-2.5 items-center justify-center"
      >
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
        colors={["#0af5ce", "#5ED2A0", "#339CB1"]}
        className="pl-4 pr-4 rounded-md h-full"
      >
        {!standings.length ? (
          <View className=" flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#00CCBB" />
          </View>
        ) : (
          <View>
            <View className="mb-2">
              <Text className="font-bold uppercase">
                England - Premier League
              </Text>
            </View>
            <View className="flex-row mb-0.5 items-center justify-center">
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
            <FlashList
              data={standings}
              keyExtractor={(item) => item.team?.id}
              renderItem={renderTableRow}
              estimatedItemSize={50}
            />
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

export default StandingScreen;
