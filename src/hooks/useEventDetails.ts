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
    strDescriptionEN:string;
    strFilename:string;
    strThumb?:string;
    strVideo?:string;
    strEvent:string;
   strSeason:string;
    strTime:string;
    strVenue:string

}

const useEventDetails = (fileName:string|undefined) =>
  useQuery<EventDetails>({
    queryKey: ["eventDetails",fileName],
    queryFn: () =>
      apiClient
        .get<EventDetails>(//fix here
          `searchfilename.php?e=${fileName && fileName!==null && fileName}`
        )
        .then((res) => res.data),
       
  });

export default useEventDetails;
