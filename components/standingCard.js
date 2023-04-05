import React from "react";
import { View, ScrollView } from "react-native";
import {
  Cell,
  Row,
  Rows,
  Table,
  TableWrapper,
} from "react-native-table-component";

const StandingCard = ({
  Rank,
  TeamLogo,
  TeamName,
  Played,
  Win,
  Draw,
  Lose,
  Points,
  Form,
}) => {
  const tableHead = [
    "Rank",
    "TeamLogo",
    "TeamName",
    "MP",
    "W",
    "D",
    "L",
    "P",
    "Form",
  ];
  const flexArr = [1, 1, 2, 1, 1, 1, 1, 1, 2];
  const tableData = [
    Rank,
    TeamLogo,
    TeamName,
    Played,
    Win,
    Draw,
    Lose,
    Points,
    Form,
  ];

  return (
    <View className="flex-1 p-4 top-8 bg-[#00CCBB]">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      >
        <Table className="w-1 border border-cyan-400">
          <Row
            data={tableHead}
            flexArr={flexArr}
            className="h-9 bg-cyan-500 text-lg font-semibold"
          />
          <TableWrapper className="flex-row">
            {tableData?.map((rowData, index) => {
              <Cell
                key={index}
                data={rowData}
                flexArr={flexArr}
                className="text-center"
              />;
            })}
          </TableWrapper>
        </Table>
      </ScrollView>
    </View>
  );
};

export default StandingCard;
