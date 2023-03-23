import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ArrowLeftIcon, ShareIcon } from "react-native-heroicons/outline";

const ArticleDetail = ({ navigation }) => {
  // const [article, setArticle] = useState(null);

  // useEffect(() => {
  //   let { article } = route.params;
  //   setArticle(article);
  // }, []);

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
        <View className="bg-white">
          <Text>{title}</Text>
          <Text>{likes} </Text>
          {/* Author section */}
          {/* Article content */}
          {/* Button section */}
        </View>
      </View>
    </ScrollView>
  );
};

export default ArticleDetail;
