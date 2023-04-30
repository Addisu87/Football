import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransfers,
  selectTransfersItems,
} from "../features/transfersSlice";
import { LinearGradient } from "expo-linear-gradient";

const Transfer = ({ playerId }) => {
  const transfers = useSelector(selectTransfersItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (transfers.length === 0) {
      dispatch(fetchTransfers(playerId));
    }
  }, [dispatch, playerId]);

  return (
    <SafeAreaView>
      {!transfers.length ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView
          vertical
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        >
          <View className="relative">
            <TouchableOpacity className="relative p-1 m-1 drop-shadow-lg max-w-md mx-auto rounded-xl bg-gray-200">
              <LinearGradient
                colors={["#5ED2A0", "#339CB1"]}
                className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg md:max-w-2xl"
              >
                <Text className="font-semibold mb-2.5">Transfer History</Text>
                <View className="px-2.5">
                  {transfers?.map(({ transfer, player }) => (
                    <View key={player?.id} className="mt-2.5">
                      <Text className="font-bold mb-1.5">{player?.name}</Text>
                      <View className="ml-2.5">
                        {transfer?.map((trans) => (
                          <View key={trans?.date} className="mt-1.25">
                            <Text>Date: {trans?.date}</Text>
                            <Text>Type: {trans?.type}</Text>
                            <View>
                              <Text>Out: {trans?.teams?.out?.name}</Text>
                              <Image
                                source={{ uri: trans?.teams?.out?.logo }}
                                className="w-8 h-8 rounded-full"
                              />
                            </View>
                            <View>
                              <Text>In: {trans?.teams?.in?.name}</Text>
                              <Image source={{ uri: trans?.teams?.in?.logo }} />
                            </View>
                          </View>
                        ))}
                      </View>
                    </View>
                  ))}
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Transfer;
