import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import TransferCard from "./TransferCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransfers,
  selectTransfersItems,
} from "../features/transfersSlice";

const Transfer = () => {
  const transfers = useSelector(selectTransfersItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!transfers.length) {
      dispatch(fetchTransfers());
    }
  }, [dispatch]);

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
          {transfers?.map((trans, index) => (
            <TransferCard
              key={index}
              DateTrans={trans.transfers?.date}
              TransType={trans.transfers?.type}
              Photo={{ uri: trans?.player?.photo }}
              Name={trans.player?.name}
              TeamIn={trans.transfers?.teams?.in?.name}
              TeamInLogo={trans.transfers?.teams?.in?.logo}
              TeamOut={trans.transfers?.teams?.out?.name}
              TeamOutLogo={trans.transfers?.teams?.out?.logo}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Transfer;
