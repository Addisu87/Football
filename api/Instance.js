import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v3",
  headers: {
    "X-RapidAPI-Key": "72e3600cb2msh3b1842e563bf2f0p1e79e8jsnb4a459f62a95",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
});
