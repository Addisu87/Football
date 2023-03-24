import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  ShareIcon,
} from "react-native-heroicons/outline";
import moment from "moment";

const ArticleDetail = ({ navigation }) => {
  const {
    params: {
      id,
      thumbnail,
      title,
      type,
      author,
      views,
      likes,
      comments,
      date,
      detail,
    },
  } = useRoute();

  return (
    <ScrollView>
      {/* Header */}
      <View className="relative">
        <Image source={thumbnail} className="w-full h-56 bg-gray-200 p-4" />

        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>

        <TouchableOpacity className="absolute top-14 right-5 p-2 bg-gray-100 rounded-full">
          <ShareIcon size={20} color="#00CCBB" />
        </TouchableOpacity>

        {/* Title section */}
        <View className="bg-white m-2 space-y-4">
          <View>
            <Text className="text-gray-900 text-base font-semibold">
              {type} {type ? ":" : ""} {title}
            </Text>
          </View>

          {/* Author section */}
          <View className="flex-row justify-between">
            <View className="flex-row space-x-2">
              <Image
                source={author.avatar}
                className="w-10 h-10 rounded-full"
              />

              <View className="text-base space-y-1">
                <Text className="font-semibold">{author.name}</Text>
                <Text>{moment(date).format("MMMM DD, YYYY")}</Text>
              </View>
            </View>

            <View className="flex-row space-x-2 items-center justify-center">
              <HeartIcon />
              <Text>{likes}</Text>
              <ChatBubbleOvalLeftIcon />
              <Text>{comments}</Text>
            </View>
          </View>

          {/* Article content */}

          <ScrollView className="h-64 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
            <View className="h-84">
              <Text className="text-left">{detail}</Text>
            </View>
          </ScrollView>

          {/* Button section */}

          <View className="items-center justify-center">
            <TouchableOpacity
              onPress={() => {}}
              className="bg-[#00CCBB] rounded-xl flex-row p-2 "
            >
              <Text className="font-bold text-xl">Read More</Text>
              <ArrowDownIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ArticleDetail;
