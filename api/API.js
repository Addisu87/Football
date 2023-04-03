import axios from "axios";

const instance = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-rapidapi-key": "95f8210a47b0bc73dcba2614e4c2cb9f",
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
});

const getData = async (endpoint, params) => {
  try {
    const { data } = await instance.get(endpoint, { params });
    return data.response;
  } catch (error) {
    console.error("error", error);
  }
};

export const getTeamData = async () =>
  getData("/teams", { league: "39", season: "2022" });

export const getFixturesData = async () =>
  getData("/fixtures", {
    league: "39",
    season: "2022",
    date: "2023-02-04",
  });

export const getPlayersData = async () =>
  getData("/players", { league: "39", season: "2022" });

export const getStandingsData = async () =>
  getData("/standings&sort=asc", { league: "39", season: "2022" });
