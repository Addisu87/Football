import React, { useLayoutEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Row, Table } from "react-native-table-component";

const tableData = {
  tableHead: ["Rank", "Team", "MP", "W", "D", "L", "P"],
  widthArr: [50, 90, 50, 50, 50, 50, 50],
  tableData: [
    ["1", "Arsenal", "21", "15", "4", "1", "65"],
    ["2", "Man United", "21", "14", "1", "6", "59"],
    ["3", "Chelsea", "21", "10", "5", "6", "45"],
  ],
};

const StandingsScreen = () => {
  const [data, setData] = useState(tableData);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="flex-1 p-4 pt-8 bg-white">
        <ScrollView horizontal={true}>
          <View className="items-center justify-center">
            <View>
              <Text className="font-bold text-lg">England: Premier League</Text>
            </View>

            <Table borderStyle={{ borderWidth: 0.5, borderColor: "teal" }}>
              <Row
                data={data.tableHead}
                widthArr={data.widthArr}
                className="h-11 bg-slate-400 font-semibold text-base  "
              />
            </Table>

            <ScrollView>
              <Table borderStyle={{ borderWidth: 0.5, borderColor: "teal" }}>
                {data.tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={data.widthArr}
                    className="h-11 bg=[#E7E6E1] text-base font-semibold"
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default StandingsScreen;
