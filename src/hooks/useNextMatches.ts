import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

interface Events {
  strEvent: string;
  idLeague: string;
  strLeague: string;
  strSeason: string;
  strHomeTeam: string;
  strAwayTeam: string;
  strHomeTeamBadge: string;
  strAwayTeamBadge: string;
  strVenue: string;
  strPoster: string;
  dateEvent: string;
  strTime: string;
  intAwayScore:string;
  intHomeScore:string;
  strStatus:string;
  strSquare:string;
  strVideo:string
}
export interface NextEvents {
  events: Events[];
}

const useNextMatches = (leagueId: number, round: number,season:number|string) =>
  useQuery<NextEvents>({
    queryKey: ["nextEvents", leagueId, round , season],
    queryFn: () =>
      apiClient
        .get<NextEvents>(
          `/eventsround.php?id=${
            leagueId && leagueId !== undefined ? leagueId : 4328
          }&r=${round && round !== undefined && round!==38 ? round + 1 : 36}&s=${ season && season !== undefined ? season : "2023-2024"}`
        )
        .then((res) => res.data),
    enabled: false,
  });

export default useNextMatches;
