import axios from "axios";
import { deflateRaw } from "zlib";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export default api;
