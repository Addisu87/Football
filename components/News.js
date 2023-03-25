import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import NewsItem from "./NewsItem";
import { useNavigation } from "@react-navigation/native";
import NotFound from "./NotFound";

export const Authors = [
  {
    id: "001",
    name: "Addisu Haile",
    avatar: require("../assets/images/Addisu.png"),
  },
  {
    id: "002",
    name: "Samule Tewodros",
    avatar: require("../assets/images/Arsenal_FC.png"),
  },
];

export const dummyNews = [
  {
    id: "001",
    thumbnail: require("../assets/images/News1.jpeg"),
    title:
      "Martin Odegaard opens up on key Mikel Arteta trait that sets Arsenal boss apart",
    type: "LIVE Transfer Talk",
    author: Authors[0],
    views: "125,908",
    likes: "1403",
    comments: "976",
    date: "2023-03-18",
    detail: `Martin Odegaard has lauded Mikel Arteta's remarkable 
    attention to detail and believes that the Spaniard's meticulous 
    methods have been the driving force behind his own sensational form. 
    Odegaard, 24, has played a key role in an Arsenal side that have 
    emerged as unlikely title contenders under the guidance of Arteta this year. 
    After a late implosion cost the Gunners a top-four finish last term, 
    the Londoners have been the surprise package in the Premier League this 
    season and are currently eight points clear of Manchester City at the 
    summit of the domestic standings.
    Arsenal last won the Premier League crown back in 2004 under Arsene Wenger 
    but are now tantalisingly close to ending their 19-year title drought - and 
    Odegaard has stressed that Arteta's influence cannot be understated.`,
  },
  {
    id: "002",
    thumbnail: require("../assets/images/News3.webp"),
    title: `Bayern Munich have been told that they 'do not need to be afraid' of 
    Erling Haaland in their Champions League quarter-final clash, by Lothar Matthaus.`,
    type: "",
    author: Authors[1],
    views: "1223",
    likes: "111",
    comments: "666",
    date: "2023-0-18",
    detail: `Bayern Munich 'do NOT need to be afraid' of Erling Haaland after 
    being drawn against Man City in the Champions League, claims Lothar Matthaus... 
    as German legend insists the Norwegian tends to 'score less' against the Bavarian side`,
  },
];

const News = ({
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
}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [mainData, setMainData] = useState();

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ArticleDetail", {
            id: "001",
            thumbnail: require("../assets/images/News1.jpeg"),
            title: "Arsenal face Crystal Palace on Sunday afternoon",
            type: "LIVE Transfer Talk",
            author: Authors[0],
            views: "125,908",
            likes: "1403",
            comments: "976",
            date: "2023-03-18",
            detail: `Martin Odegaard has lauded Mikel Arteta's remarkable 
            attention to detail and believes that the Spaniard's meticulous 
            methods have been the driving force behind his own sensational form. 
            Odegaard, 24, has played a key role in an Arsenal side that have 
            emerged as unlikely title contenders under the guidance of Arteta this year. 
            After a late implosion cost the Gunners a top-four finish last term, 
            the Londoners have been the surprise package in the Premier League this 
            season and are currently eight points clear of Manchester City at the 
            summit of the domestic standings.
            Arsenal last won the Premier League crown back in 2004 under Arsene Wenger 
            but are now tantalisingly close to ending their 19-year title drought - and 
            Odegaard has stressed that Arteta's influence cannot be understated.`,
          })
        }
      >
        <View className="h-6 m-2 flex-row justify-between items-center flex-wrap">
          <Text className="font-medium text-base uppercase">Latest News</Text>
          <Text className="uppercase">View All</Text>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
          horizontal
          keyExtractor={(item) => item.id}
        >
          {dummyNews.map((item) => (
            <NewsItem key={item.id} item={item} />
          ))}
        </ScrollView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default News;
