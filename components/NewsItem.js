import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import moment from "moment";

const NewsItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <View className="flex-row justify-between">
        <View>
          <Image source={item.thumbnail} className="w-36 h-24 rounded-md m-2" />
        </View>
        <View className="w-56">
          <Text className="font-semibold">{item.title}</Text>
          <Text className="font-light">
            {item.views} Views - {moment(item.date).fromNow()}
          </Text>
          <Text className="font-normal">{item.author.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;
