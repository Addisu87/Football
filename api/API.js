import axios from "axios";

export const getFootballData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/leagues`, {
      params: {
        id: "39",
        name: "Premier League",
        country: "England",
        code: "GB",
        season: "2022",
        type: "League",
      },
      headers: {
        "X-RapidAPI-Key": "72e3600cb2msh3b1842e563bf2f0p1e79e8jsnb4a459f62a95",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    return null;
  }
};
