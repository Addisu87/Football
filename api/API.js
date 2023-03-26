// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api-football-v1.p.rapidapi.com/v3",
//   headers: {
//     "X-RapidAPI-Key": "72e3600cb2msh3b1842e563bf2f0p1e79e8jsnb4a459f62a95",
//     "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//   },
// });

// export const getTeamData = async () => {
//   try {
//     const {
//       data: { data },
//     } = await instance.get(`/teams`, {
//       params: {
//         league: "39",
//         season: "2023",
//       },
//     });
//     return data;
//   } catch (error) {
//     console.error("error", error);
//   }
// };

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
