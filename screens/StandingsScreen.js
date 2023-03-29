import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const StandingsScreen = () => {
  const [data, setData] = useState();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>England: Premier League</Text>
      </View>

      <table class="table-auto">
        <thead>
          <tr>
            <th>
              <Text>Rank</Text>
            </th>
            <th>
              <Text>Team</Text>
            </th>
            <th>
              <Text>MP</Text>
            </th>
            <th>
              <Text>W</Text>
            </th>
            <th>
              <Text>D</Text>
            </th>
            <th>
              <Text>L</Text>
            </th>
            <th>
              <Text>P</Text>
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </SafeAreaView>
  );
};

export default StandingsScreen;
