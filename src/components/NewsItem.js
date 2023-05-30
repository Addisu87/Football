import React from "react";
import { View, Text, Image } from "react-native";
import moment from "moment";

const NewsItem = ({ item }) => {
  return (
    <View className="flex-row justify-between">
      <View>
        <Image source={item.thumbnail} className="w-36 h-24 rounded-md m-2" />
      </View>
      <View className="w-56">
        <Text className="font-semibold">{item.title}</Text>
        <Text className="font-light">
          {item.views} Views - {moment(item.date, "MMMM DD, YYYY").fromNow()}
        </Text>
        <Text className="font-normal">{item.author.name}</Text>
      </View>
    </View>
  );
};

export default NewsItem;
