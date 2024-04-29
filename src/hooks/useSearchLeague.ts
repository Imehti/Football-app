import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
// import { useRecoilValue } from "recoil";
// import isSelectedLeagueaValue from "../recoil/selector/isSelectedLeagueValue";


export interface Table {
  strForm:string,
  strLeague:string
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
// const selectedLeagueStatus =useRecoilValue(isSelectedLeagueaValue)

//  console.log(selectedLeagueStatus);

  return useQuery<League>({
    queryKey: ["filterdLeague", idLeague, year],
    enabled:false,

    queryFn: () =>
      apiClient
        .get<League>(
          `/lookuptable.php?l=${
            idLeague && idLeague !== undefined ? idLeague : 4328
          }&s=${ year && year !== undefined ? year : "2023-2024"}`
        )
        .then((res) => res.data),
  });
};

export default useSearchLeague;
