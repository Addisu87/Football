import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import MatchesCard from "./MatchesCard";
import { getVenueData } from "../api/API";

const Matches = ({ venue }) => {
  const [venueData, setVenueData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getVenueData().then((pitch) => {
      setVenueData(pitch);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="m-2 flex-row justify-between items-center">
        <Text className="font-medium text-base uppercase">
          Upcoming Matches
        </Text>
        <Text className="uppercase">View All</Text>
      </View>
      {isLoading ? (
        <>
          <View className=" flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#0B646B" />
          </View>
        </>
      ) : (
        <>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
          >
            {venueData.map((stadium) => {
              <MatchesCard key={stadium._id} stadium={stadium} />;
            })}
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

export default Matches;
