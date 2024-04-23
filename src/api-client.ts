import axios from "axios";

const apiClient = axios.create({
  baseURL: "www.thesportsdb.com/api/v1/json/3/searchstrTeams.php?t=Arsenal",
});

export default apiClient;
