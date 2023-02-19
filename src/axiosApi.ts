import axios from "axios";
import {API_URL} from "./constants";

const axiosApi = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization : `Bearer ${JSON.parse(JSON.parse(localStorage.getItem("persist:auth")!).user).token}`
  }
});

export default axiosApi;