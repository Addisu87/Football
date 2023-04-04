import React from "react";
import { View, Text, ScrollView } from "react-native";

const StandingCard = ({
  Rank,
  Team,
  Played,
  Win,
  Draw,
  Lose,
  Points,
  Form,
  LeagueName,
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <View>
        <Text className="font-bold text-lg">{LeagueName}</Text>
      </View>

      <ScrollView>
        {/* Table Container */}
        <View>
          {/* Table Head */}
          <View className="flex-row bg-[#00CCBB]">
            {/* One Single Row */}
            <View className="w-[10%]">
              <Text className="font-bold text-lg">Rank</Text>
            </View>
            <View className="w-[25%]">
              <Text className="font-bold text-lg">Team</Text>
            </View>
            <View className="w-[10%]">
              <Text className="font-bold text-lg">MP</Text>
            </View>
            <View className="w-[10%]">
              <Text className="font-bold text-lg">W</Text>
            </View>
            <View className="w-[10%]">
              <Text className="font-bold text-lg">D</Text>
            </View>
            <View className="w-[10%]">
              <Text className="font-bold text-lg">L</Text>
            </View>
            <View className="w-[10%]">
              <Text className="font-bold text-lg">P</Text>
            </View>
            <View className="w-[15%]">
              <Text className="font-bold text-lg">Form</Text>
            </View>
          </View>

          {/* Table row */}

          <View className="flex-row">
            {/* One Single Row */}
            <View className="w-[10%]">
              <Text className="font-normal text-base">{Rank}</Text>
            </View>
            <View className="w-[25%]">
              <Text className="font-normal text-base">{Team}</Text>
            </View>
            <View className="w-[10%]">
              <Text className="font-normal text-base">{Played}</Text>
            </View>
            <View className="w-[10%]">
              <Text className="font-normal text-base">{Win}</Text>
            </View>
            <View className="w-[10%]">
              <Text className="font-normal text-base">{Draw}</Text>
            </View>
            <View className="w-[10%]">
              <Text className="font-normal text-base">{Lose}</Text>
            </View>
            <View className="w-[10%]">
              <Text className="font-normal text-base">{Points}</Text>
            </View>
            <View className="w-[15%]">
              <Text className="font-normal text-base">{Form}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default StandingCard;
