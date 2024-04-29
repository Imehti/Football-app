import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

interface Events{
    strEvent:string,
    idLeague:string,
    strLeague:string,
    strSeason:string,
    strHomeTeam:string,
    strAwayTeam:string,
    strHomeTeamBadge:string,
    strAwayTeamBadge:string,
    strVenue:string,
    strPoster:string,
    dateEvent:string,
    strTime:string
}
export interface NextEvents{
    events:Events[]
}


const useNextMatches = () => 
useQuery<NextEvents>({
    queryKey:['nextEvents'],
    queryFn: () => apiClient.get<NextEvents>('/eventsround.php?id=4332&r=36&s=2023-2024').then(res=>res.data)
})

export default useNextMatches