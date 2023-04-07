import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { getLineUps } from "../api/API";

const Lineups = () => {
  const [lineupsData, setLineupsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getLineUps().then((line) => {
      setLineupsData(line);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  const renderItem = ({ item }) => (
    <View key={item.id}>
      <Text>{item.name}</Text>
      <Text>{item.position}</Text>
    </View>
  );
  return (
    <View>
      {isLoading ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <>
          <FlatList
            data={lineupsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      )}
    </View>
  );
};

export default Lineups;
