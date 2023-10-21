import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const instance = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
  timeout: 5000, // increase timeout value
});

export const getData = async (endpoint, params) => {
  try {
    const { data } = await instance.get(endpoint, { params });
    return data.response;
  } catch (error) {
    console.error("error", error);
  }
};
