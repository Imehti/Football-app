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
    strFanart?:string;
    strFilename:string;
    strMap?:string;
    strBanner?:string;
    strPoster?:string;
    strThumb?:string;
    strVideo?:string

}

const useEventDetails = (fileName:string) =>
  useQuery<EventDetails>({
    queryKey: ["eventDetails",fileName],
    queryFn: () =>
      apiClient
        .get<EventDetails>(//fix here
          `searchfilename.php?e=${fileName && fileName!==null &&fileName  }`
        )
        .then((res) => res.data),
        enabled:false
  });

export default useEventDetails;
