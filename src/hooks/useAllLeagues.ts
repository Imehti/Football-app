import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface AllLeagues {
  leagues: League[];
}

export interface League {
  idLeague: string;
  strLeague: string;
  lable:string,
  value:string
}

const useAllLeagues= () =>
  useQuery<AllLeagues,Error>({
    queryKey: ["allLeagues"],
    queryFn: () =>
      apiClient.get<AllLeagues>("/all_leagues.php").then((res) => res.data),
  });

export default useAllLeagues;
