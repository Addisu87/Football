import axios from "axios";

export const instance = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-rapidapi-key": "95f8210a47b0bc73dcba2614e4c2cb9f",
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
});

export const getTeamData = async () => {
  try {
    const { data } = await instance.get(`/teams`, {
      params: {
        league: "39",
        season: "2022",
      },
    });
    // console.log(JSON.stringify(response));
    return data;
  } catch (error) {
    console.error("error", error);
  }
};
