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
    return data.response;
  } catch (error) {
    console.error("error", error);
  }
};

export const getFixturesData = async () => {
  try {
    const { data } = await instance.get(`/fixtures`, {
      params: {
        league: "39",
        season: "2022",
      },
    });
    return data.response;
  } catch (error) {
    console.error("error", error);
  }
};

export const getPlayersData = async () => {
  try {
    const { data } = await instance.get(`/players`, {
      params: {
        league: "39",
        season: "2022",
      },
    });
    return data.response;
  } catch (error) {
    console.error("error", error);
  }
};

export const getStandingsData = async () => {
  try {
    const { data } = await instance.get(`/standings`, {
      params: {
        league: "39",
        season: "2022",
      },
    });
    return data.response;
  } catch (error) {
    console.error("error", error);
  }
};

export const getVenueData = async () => {
  try {
    const { data } = await instance.get(`/venue`, {
      params: {
        league: "39",
        season: "2022",
      },
    });
    return data.response;
  } catch (error) {
    console.error("error", error);
  }
};
