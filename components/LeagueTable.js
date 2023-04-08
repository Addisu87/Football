import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { getStandingsData } from "../api/API";

const LeagueTable = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStandingsData().then((res) => {
      setTableData(res[0]?.league?.standings[0]);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  const renderTableRow = ({ item }) => {
    return (
      <View style={styles.tableRow}>
        <Text style={styles.position}>{item?.rank}</Text>
        <Text style={styles.team}>{item.team?.name}</Text>
        <Text style={styles.played}>{item.all?.played}</Text>
        <Text style={styles.win}>{item.all?.win}</Text>
        <Text style={styles.draw}>{item.all?.draw}</Text>
        <Text style={styles.lose}>{item.all?.lose}</Text>
        <Text style={styles.goalDiff}>{item?.goalsDiff}</Text>
        <Text style={styles.points}>{item?.points}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <>
          {" "}
          <View style={styles.headerRow}>
            <Text style={styles.positionHeader}>Pos</Text>
            <Text style={styles.teamHeader}>Team</Text>
            <Text style={styles.playedHeader}>P</Text>
            <Text style={styles.winHeader}>W</Text>
            <Text style={styles.drawHeader}>D</Text>
            <Text style={styles.loseHeader}>L</Text>
            <Text style={styles.goalDiffHeader}>GD</Text>
            <Text style={styles.pointsHeader}>Pts</Text>
          </View>
          <FlatList
            data={tableData}
            keyExtractor={(item) => item.team_id}
            renderItem={renderTableRow}
          />
        </>
      )}
    </View>
  );
};

export default LeagueTable;

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    padding: 10,
  },
  headerRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  positionHeader: {
    flex: 1,
    fontWeight: "bold",
  },
  teamHeader: {
    flex: 4,
    fontWeight: "bold",
  },
  playedHeader: {
    flex: 1,
    fontWeight: "bold",
  },
  winHeader: {
    flex: 1,
    fontWeight: "bold",
  },
  drawHeader: {
    flex: 1,
    fontWeight: "bold",
  },
  loseHeader: {
    flex: 1,
    fontWeight: "bold",
  },
  goalDiffHeader: {
    flex: 1,
    fontWeight: "bold",
  },
  pointsHeader: {
    flex: 1,
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  position: {
    flex: 1,
  },
  team: {
    flex: 4,
  },
  played: {
    flex: 1,
  },
  win: {
    flex: 1,
  },
  draw: {
    flex: 1,
  },
  lose: {
    flex: 1,
  },
  goalDiff: {
    flex: 1,
  },
  points: {
    flex: 1,
  },
};
