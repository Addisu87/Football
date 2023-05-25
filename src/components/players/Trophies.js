import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrophies, selectTrophiesItems } from "../../redux/trophiesSlice";

const Trophies = ({ playerId }) => {
  const Trophies = useSelector(selectTrophiesItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrophies(playerId));
  }, [dispatch, playerId]);

  return (
    <SafeAreaView>
      {!Trophies?.length ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <>
          <View>
            {Trophies?.length > 0 && (
              <>
                {Trophies.winner?.map(({ league, country, place }) => (
                  <View key={league}>
                    <Text className="mt-2 text-black">
                      {`League: ${league} - Country: ${country}`}
                    </Text>
                    <Text className="mt-2 text-black">Winner: {place}</Text>
                  </View>
                ))}

                {Trophies.second?.map(({ league, country, place }) => (
                  <View key={league}>
                    <Text className="mt-2 text-black">
                      {`League: ${league} - Country: ${country}`}
                    </Text>
                    <Text className="mt-2 text-black">Runner-up: {place}</Text>
                  </View>
                ))}
              </>
            )}
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Trophies;
