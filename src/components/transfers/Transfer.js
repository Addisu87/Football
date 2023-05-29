import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransfers,
  selectTransferPlayers,
} from "../../redux/slices/transfersSlice";
import moment from "moment";
import TransferCard from "./TransferCard";

const Transfer = ({ Photo }) => {
  const transfer = useSelector(selectTransferPlayers);
  const dispatch = useDispatch();

  const transferPlayers = [...transfer]
    .slice(0, 15)
    .sort((a, b) => moment(a.player.update).diff(moment(b.player.update)));

  const playerId = "276";
  const season = "2022";

  useEffect(() => {
    dispatch(getTransfers(playerId, season));
  }, [dispatch, playerId, season]);

  return (
    <SafeAreaView>
      <View className="p-2 flex-row justify-between items-center">
        <Text className="font-medium text-base uppercase">
          Transfer History
        </Text>
        <Text className="uppercase">View All</Text>
      </View>

      {!transferPlayers?.length ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <View className="relative">
          <View className="h-[600px]">
            <ScrollView className="flex-1 p-2">
              <>
                {transferPlayers?.length > 0 &&
                  transferPlayers?.map((player, index) => (
                    <TransferCard
                      key={index}
                      Photo={Photo}
                      Name={player?.player?.name}
                      DateTrans={player?.transfers[0]?.date}
                      TransType={player?.transfers[0]?.type}
                      TeamOutLogo={{
                        uri: player?.transfers[0]?.teams?.out?.logo,
                      }}
                      TeamOut={player?.transfers[0]?.teams?.out?.name}
                      TeamIn={player?.transfers[0]?.teams?.in?.name}
                      TeamInLogo={{
                        uri: player?.transfers[0]?.teams?.in?.logo,
                      }}
                    />
                  ))}
              </>
            </ScrollView>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Transfer;
