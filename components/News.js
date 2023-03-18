import { View, Text } from "react-native";
import React from "react";

export const Authors = [
  {
    id: "001",
    name: "Brian Imanuel",
    avatar: require("../assets/images/Addisu.png"),
  },
  {
    id: "002",
    name: "Daniel Feliciano",
    avatar: require("../assets/images/Arsenal_FC.png"),
  },
];

export const dummyNews = [
  {
    id: "001",
    thumbnail: require("../assets/images/News1.jpeg"),
    title: "Arsenal face Crystal Palace on Sunday afternoon",
    type: "LIVE Transfer Talk",
    author: Authors[0],
    views: "125,908",
    likes: "1403",
    comments: "976",
    date: "2020-05-15",
    detail: `Martin Odegaard and Arsenal stars to return against Crystal Palace with £21m signing on standby.`,
  },
  {
    id: "002",
    thumbnail: require("../assets/images/News3.webp"),
    title: `Bayern Munich have been told that they 'do not need to be afraid' of Erling Haaland in their Champions League quarter-final clash, by Lothar Matthaus.`,
    type: "",
    author: Authors[1],
    views: "1223",
    likes: "111",
    comments: "666",
    date: "2023-0-18",
    detail: `Bayern Munich 'do NOT need to be afraid' of Erling Haaland after being drawn against Man City in the Champions League, claims Lothar Matthaus... as German legend insists 
    the Norwegian tends to 'score less' against the Bavarian side`,
  },
];

const News = () => {
  return (
    <View className="h-6 m-2 flex-row justify-between items-center">
      <Text className="font-medium text-base uppercase">Latest News</Text>
      <Text className="uppercase">View All</Text>
    </View>
  );
};

export default News;
