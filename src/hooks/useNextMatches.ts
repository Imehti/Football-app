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
  intAwayScore: string;
  intHomeScore: string;
  strStatus: string;
  strSquare: string;
  strVideo: string;
  strBanner: string;
  strThumb: string;
}
export interface NextEvents {
  events: Events[];
}

const useNextMatches = (
  leagueId: number,
  maxPlayed: number,
  season: number | string,
  round: number
) =>
  useQuery<NextEvents>({
    queryKey: ["nextEvents", leagueId, round, season, round],
    queryFn: () =>
      apiClient
        .get<NextEvents>(
          `/eventsround.php?id=${
            leagueId && leagueId !== undefined ? leagueId : 4328
          }&r=${
            round && round !== undefined
              ? round
              : maxPlayed !== 38
              ? maxPlayed + 1
              : maxPlayed
          }&s=${season && season !== undefined ? season : "2023-2024"}`
        )
        .then((res) => res.data),
    enabled: false,
  });

export default useNextMatches;
