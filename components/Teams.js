import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import TeamsCard from "./TeamsCard";

const Teams = () => {
  return (
    <SafeAreaView>
      <View className="h-4 m-2 flex-row justify-between items-center">
        <Text className="font-medium text-base text-[#A0A3BD] uppercase">
          Popular Teams
        </Text>
        <Text className="uppercase text-base text-[#A0A3BD]">View All</Text>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <TeamsCard
          imgUrl="https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png"
          name="Arsenal-1"
        />
        <TeamsCard
          imgUrl="https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png"
          name="Arsenal-2"
        />
        <TeamsCard
          imgUrl="https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png"
          name="Arsenal-3"
        />
        <TeamsCard
          imgUrl="https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png"
          name="Arsenal-3"
        />
        <TeamsCard
          imgUrl="https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png"
          name="Arsenal-3"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Teams;
