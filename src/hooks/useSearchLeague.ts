
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Table {
    intRank:number
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
    idTeam:string,
    strTeamBadge:string
  }

  export interface League{
    table:Table[]
  }

const useSearchLeague = () => 
useQuery<League>({
    queryKey:['filterdLeague'],
    queryFn:()=> apiClient.get<League>('/lookuptable.php?l=4328&s=2023-2024').then(res=> res.data)
})

export default useSearchLeague