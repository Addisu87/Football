import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/outline";

const PlayerCard = ({ navigation }) => {
  const {
    params: { Photo, Name },
  } = useRoute();

  return (
    <SafeAreaView>
      <TouchableOpacity
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        onPress={navigation.goBack}
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>

      <View>
        <View className="text-center">
          <Image
            source={Photo}
            className="w-16 h-16 mx-auto rounded-full drop-shadow-lg"
          />
          <Text className="text-neutral-500 dark:text-neutral-400">{Name}</Text>
        </View>

        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          onPress={() =>
            navigation.navigate("playerStatistics", { Photo, Name })
          }
        >
          <ArrowRightIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PlayerCard;
