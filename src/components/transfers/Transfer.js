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
  getTransfers,
  selectTransferPlayers,
} from "../../redux/slices/transfersSlice";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";

const Transfer = () => {
  const transfer = useSelector(selectTransferPlayers);
  const dispatch = useDispatch();

  const transferPlayers = [...transfer].sort((a, b) =>
    moment(a.transfers.date).diff(moment(b.transfers.date))
  );
  console.log("transferPlayers", transferPlayers);

  const playerId = "35845";

  useEffect(() => {
    dispatch(getTransfers(playerId));
  }, []);

  return (
    <SafeAreaView>
      {!transfer?.length ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <View className="relative">
          <TouchableOpacity className="relative overflow-hidden">
            <LinearGradient
              colors={["#60a5fa", "#34d399"]}
              className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg"
            >
              <Text className="font-semibold mb-2.5">Transfer History</Text>
              <View className="h-[600px]">
                <ScrollView className="flex-1 p-2">
                  <>
                    {transfer?.length > 0 &&
                      transfer?.map((trans, index) => (
                        <View key={index} className="mt-1.25">
                          <Text>Date: {trans?.transfers?.date}</Text>
                          <Text>Type: {trans?.transfers?.type}</Text>
                          <View>
                            <Text>
                              Out: {trans?.transfers?.teams?.out?.name}
                            </Text>
                            <Image
                              source={{
                                uri: trans?.transfers?.teams?.out?.logo,
                              }}
                              className="w-8 h-8 rounded-full"
                            />
                          </View>
                          <View>
                            <Text>In: {trans?.transfers?.teams?.in?.name}</Text>
                            <Image
                              source={{
                                uri: trans?.transfers?.teams?.in?.logo,
                              }}
                            />
                          </View>
                        </View>
                      ))}
                  </>
                </ScrollView>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Transfer;
