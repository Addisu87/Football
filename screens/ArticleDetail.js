import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { ArrowLeftIcon, ShareIcon } from "react-native-heroicons/outline";

const ArticleDetail = ({ navigation, route }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    let { article } = route.params;
    setArticle(article);
  }, []);

  return (
    <SafeAreaView>
      {/* Header */}
      <Image source={article?.thumbnail} />
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowLeftIcon />
        </TouchableOpacity>
        <View>
          <ShareIcon />
        </View>
      </View>

      {/* Title section */}
      <View>
        <Text>ArticleDetail</Text>
      </View>
      {/* Author section */}
      {/* Article content */}
      {/* Button section */}
    </SafeAreaView>
  );
};

export default ArticleDetail;
