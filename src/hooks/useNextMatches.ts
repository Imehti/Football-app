import { max } from "lodash";
import useTableStanding from "../components/TableStanding";
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
}
export interface NextEvents {
  events: Events[];
}




const useNextMatches = (leagueId: number,round:number) =>
  useQuery<NextEvents>({
    queryKey: ["nextEvents", leagueId , round],
    queryFn: () =>
      apiClient
        .get<NextEvents>(
          `/eventsround.php?id=${
            leagueId && leagueId !== undefined ? leagueId : 4328
          }&r=${round && round !==undefined ? round+1 :36}&s=2023-2024`
        )
        .then((res) => res.data),
        enabled:false
  });

export default useNextMatches;
