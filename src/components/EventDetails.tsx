import { useRecoilValue } from "recoil"
import FileNameValue from "../recoil/selector/FileNameValue"
import useEventDetails from "../hooks/useEventDetails";

function EventDetails(){
    const fileName=useRecoilValue(FileNameValue)


    const leagueEndIndex = fileName.indexOf("2");
    const league = fileName.substring(0, leagueEndIndex).replace(/ /g,"_")

    
    
    const dateStartIndex = leagueEndIndex;
    const dateEndIndex = fileName.indexOf(" ", dateStartIndex);
    const date = fileName.substring(dateStartIndex, dateEndIndex);
    
    const teamsStartIndex = dateEndIndex + 1;
    const teamsEndIndex = fileName.length;
    const teams = fileName.substring(teamsStartIndex, teamsEndIndex).replace(/ /g,"_");
    
    const parseFileName=league+date+"_"+teams
 
    

    const {data:eventDetails}=useEventDetails(parseFileName)
    
    //fix the map
return(
    <>
    
    <h1>{eventDetails?.event.map(match => match.strFilename)}</h1>
    </>
)
}


export default EventDetails