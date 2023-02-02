import axios from "axios";

// base url ,we will append it to the requestes dynamically
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
