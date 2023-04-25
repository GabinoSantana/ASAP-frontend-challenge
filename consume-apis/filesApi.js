import axios from "axios";

const filesApi = axios.create({
  baseURL: `http://localhost:4000`,
});

export default filesApi;
