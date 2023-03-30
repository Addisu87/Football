import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Row, Table } from "react-native-table-component";
import { getStandingsData } from "../api/API";
import NotFound from "../components/NotFound";

const tableData = {
  tableHead: ["Rank", "Team", "MP", "W", "D", "L", "P", "Form"],
  widthArr: [50, 90, 50, 50, 50, 50, 50],
  tableData: [
    [{ rank }, { logo }, { played }, { win }, { draw }, { lose }, { form }],
  ],
};

const StandingsScreen = () => {
  const [standingData, setStandingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState(tableData);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getStandingsData().then((rank) => {
      setStandingData(rank);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="flex-1 p-4 pt-8 bg-white">
        {isLoading ? (
          <>
            <View className=" flex-1 items-center justify-center">
              <ActivityIndicator size="large" color="#0B646B" />
            </View>
          </>
        ) : (
          <>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
            >
              {standingData.length > 0 ? (
                <>
                  <View className="items-center justify-center">
                    <View>
                      <Text className="font-bold text-lg">
                        England: Premier League
                      </Text>
                    </View>

                    <Table
                      borderStyle={{ borderWidth: 0.5, borderColor: "teal" }}
                    >
                      <Row
                        data={data.tableHead}
                        widthArr={data.widthArr}
                        className="h-11 bg-slate-400 font-semibold text-base  "
                      />
                    </Table>

                    <ScrollView>
                      <Table
                        borderStyle={{ borderWidth: 0.5, borderColor: "teal" }}
                      >
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
                </>
              ) : (
                <>
                  <NotFound />
                </>
              )}
            </ScrollView>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default StandingsScreen;
