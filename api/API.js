import axios from "axios";

export const instance = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-rapidapi-key": "95f8210a47b0bc73dcba2614e4c2cb9f",
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
  timeout: 10000, // increase timeout value
});

export const getData = async (endpoint, params) => {
  try {
    const { data } = await instance.get(endpoint, { params });
    return data.response;
  } catch (error) {
    console.error("error", error);
  }
};
