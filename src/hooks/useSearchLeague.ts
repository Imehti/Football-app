import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";


export interface Table {
  intRank: number;
  key: string;
  strTeam: string;
  intPlayed: number;
  intWin: number;
  intDraw: number;
  intLoss: number;
  intGoalsFor: number;
  intGoalsAgainst: number;
  intGoalDifference: number;
  intPoints: number;
  idTeam: string;
  strTeamBadge: string;
}

export interface League {
  table: Table[];
}

const useSearchLeague = (idLeague: number, year: number | string) => {


  // console.log(selectedLeagueStatus);

  return useQuery<League>({
    queryKey: ["filterdLeague", idLeague, year],
    enabled:false,
    refetchOnWindowFocus:true,
    queryFn: () =>
      apiClient
        .get<League>(
          `/lookuptable.php?l=${
            idLeague && idLeague !== undefined ? idLeague : 4328
          }&s=${year && year !== undefined ? year : "2023-2024"}`
        )
        .then((res) => res.data),
  });
};

export default useSearchLeague;
