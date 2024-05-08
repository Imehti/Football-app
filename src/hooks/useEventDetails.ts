import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";


export interface EventDetails{
    event:Event[]
}
interface Event{
    idEvent:string;
    dateEvent:string;
    intAwayScore:string;
    intHomeScore:string;
    intRound:string;
    intSpectators:string;
    strAwayTeam:string;
    strHomeTeam:string;
    strDescriptionEN:string;
    strFanart:string;
    strFilename:string;
    strMap:string;

}

const useEventDetails = (fileName:string) =>
  useQuery<EventDetails>({
    queryKey: ["eventDetails",fileName],
    queryFn: () =>
      apiClient
        .get<EventDetails>(
          "searchfilename.php?e=English_Premier_League_2015-04-26_Arsenal_vs_Chelsea"
        )
        .then((res) => res.data),
  });

export default useEventDetails;
