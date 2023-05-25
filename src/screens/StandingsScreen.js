import React, { useEffect, useLayoutEffect } from "react";
import { View, Text, ActivityIndicator, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { useDispatch, useSelector } from "react-redux";
import { fetchStandings, selectStandingItems } from "../redux/standingSlice";

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
        className="flex-row px-2 py-1 items-center bg-transparent
        border-b border-gray-200 whitespace-nowrap shadow-transparent"
      >
        <View className="flex-initial w-[10%]">
          <Text>{item?.rank}</Text>
        </View>
        <View className="flex-row w-[30%] space-x-2 items-center">
          <Image
            source={{ uri: item.team?.logo }}
            className="w-5 h-5 inline-flex items-center justify-center
             mr-2 text-white transition-all duration-200
             ease-soft-in-out text-sm rounded-xl"
          />
          <Text className="mb-0 font-semibold leading-tight text-xs">
            {item.team?.name?.length > 9
              ? `${item.team?.name.slice(0, 9)}..`
              : item.team?.name}
          </Text>
        </View>
        <View
          className="flex-initial w-[10%] p-1 leading-normal
        text-center align-middle bg-transparent text-xs
         whitespace-nowrap shadow-transparent"
        >
          <Text>{item.all?.played}</Text>
        </View>
        <View
          className="flex-initial w-[10%] p-1 leading-normal
        text-center align-middle bg-transparent text-xs
         whitespace-nowrap shadow-transparent"
        >
          <Text>{item.all?.win}</Text>
        </View>
        <View
          className="flex-initial w-[10%] p-1 leading-normal
        text-center align-middle bg-transparent text-xs
         whitespace-nowrap shadow-transparent"
        >
          <Text>{item.all?.draw}</Text>
        </View>
        <View
          className="flex-initial w-[10%] p-1 leading-normal
        text-center align-middle bg-transparent text-xs
         whitespace-nowrap shadow-transparent"
        >
          <Text>{item.all?.lose}</Text>
        </View>
        <View
          className="flex-initial w-[10%] p-1 leading-normal
        text-center align-middle bg-transparent text-xs
         whitespace-nowrap shadow-transparent"
        >
          <Text>{item?.goalsDiff}</Text>
        </View>
        <View
          className="flex-initial w-[10%] p-1 leading-normal
        text-center align-middle bg-transparent text-xs
         whitespace-nowrap shadow-transparent"
        >
          <Text>{item?.points}</Text>
        </View>
      </View>
    );
  };

  return (
    <View className="h-[600px]">
      <ScrollView className="flex-1 p-2">
        {!standings.length ? (
          <View className=" flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#00CCBB" />
          </View>
        ) : (
          <LinearGradient colors={["#60a5fa", "#34d399"]} className="h-full">
            <View
              className="relative flex-1 p-2 w-full min-w-0 mb-0 break-words
          border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"
            >
              <View className="p-6 pb-0 mb-0 rounded-t-2xl">
                <Text className="font-bold uppercase">
                  England - Premier League
                </Text>
              </View>
              <View className="flex-auto px-0 pt-0 pb-2">
                <View className="overflow-x-auto p-0">
                  <View className="flex-row items-center w-full mb-0 align-top border-gray-200 text-black">
                    <View
                      className="flex-initial w-[10%] p-1 border-b border-gray-200
                  shadow-none text-xxs border-b-solid"
                    >
                      <Text
                        className="font-bold text-center uppercase
                    align-middle bg-transparent tracking-none
                  whitespace-nowrap text-black opacity-70"
                      >
                        Po
                      </Text>
                    </View>
                    <View
                      className="flex-initial w-[30%] p-1 border-b border-gray-200
                  shadow-none text-xxs border-b-solid"
                    >
                      <Text
                        className="font-bold text-center uppercase
                    align-middle bg-transparent tracking-none
                  whitespace-nowrap text-black opacity-70"
                      >
                        Team
                      </Text>
                    </View>
                    <View
                      className="flex-initial w-[10%] p-1 border-b border-gray-200
                  shadow-none text-xxs border-b-solid"
                    >
                      <Text
                        className="font-bold text-center uppercase
                    align-middle bg-transparent tracking-none
                  whitespace-nowrap text-black opacity-70"
                      >
                        P
                      </Text>
                    </View>
                    <View
                      className="flex-initial w-[10%] p-1 border-b border-gray-200
                  shadow-none text-xxs border-b-solid"
                    >
                      <Text
                        className="font-bold text-center uppercase
                    align-middle bg-transparent tracking-none
                  whitespace-nowrap text-black opacity-70"
                      >
                        W
                      </Text>
                    </View>
                    <View
                      className="flex-initial w-[10%] p-1 border-b border-gray-200
                  shadow-none text-xxs border-b-solid"
                    >
                      <Text
                        className="font-bold text-center uppercase
                    align-middle bg-transparent tracking-none
                  whitespace-nowrap text-black opacity-70"
                      >
                        D
                      </Text>
                    </View>
                    <View
                      className="flex-initial w-[10%] p-1 border-b border-gray-200
                  shadow-none text-xxs border-b-solid"
                    >
                      <Text
                        className="font-bold text-center uppercase
                    align-middle bg-transparent tracking-none
                  whitespace-nowrap text-black opacity-70"
                      >
                        L
                      </Text>
                    </View>
                    <View
                      className="flex-initial w-[10%] p-1 border-b border-gray-200
                  shadow-none text-xxs border-b-solid"
                    >
                      <Text
                        className="font-bold text-center uppercase
                    align-middle bg-transparent tracking-none
                  whitespace-nowrap text-black opacity-70"
                      >
                        GD
                      </Text>
                    </View>
                    <View
                      className="flex-initial w-[10%] p-1 border-b border-gray-200
                  shadow-none text-xxs border-b-solid"
                    >
                      <Text
                        className="font-bold text-center uppercase
                    align-middle bg-transparent tracking-none
                  whitespace-nowrap text-black opacity-70"
                      >
                        Pts
                      </Text>
                    </View>
                  </View>
                </View>
                <FlashList
                  data={standings}
                  keyExtractor={(item) => item.team?.id}
                  renderItem={renderTableRow}
                  estimatedItemSize={50}
                />
              </View>
            </View>
          </LinearGradient>
        )}
      </ScrollView>
    </View>
  );
};

export default StandingScreen;
