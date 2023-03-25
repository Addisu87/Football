import { instance } from "./Instance";

// export const getFootballData = async () => {
//   try {
//     const response = await instance.get(`/leagues`, {
//       params: {
//         id: "39",
//         name: "Premier League",
//         country: "England",
//         code: "GB",
//         season: "2022",
//         type: "League",
//         team: "20",
//       },
//     });
//     return response;
//   } catch (error) {
//     return null;
//   }
// };

export const getTeamData = async () => {
  try {
    const {
      data: { data },
    } = await instance.get(`/teams`, {
      params: {
        league: "39",
        season: "2022",
        country: "England",
      },
    });
    return data;
  } catch (error) {
    return null;
  }
};
