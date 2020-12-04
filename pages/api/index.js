import axios from "axios";

const api = axios.create({
  //baseURL: process.env.REACT_APP_BD_URL,
  baseURL: "https://bolaoequiper2.com/",
});

export default api;
