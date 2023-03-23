import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import moment from "moment";

const NewsItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <View className="flex-row justify-between">
        <Image source={item.thumbnail} className="w-20 h-20 rounded-md m-2" />
        <View className="justify-between w-56 flex-row">
          <Text>{item.title}</Text>
          <Text>
            {item.views} Views - {moment(item.date).fromNow()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;
