import { useRecoilValue } from "recoil"
import FileNameValue from "../recoil/selector/FileNameValue"
import useEventDetails from "../hooks/useEventDetails";

function EventDetails(){
    const fileName=useRecoilValue(FileNameValue)


 
    

    const {data:eventDetails}=useEventDetails(fileName.replace(/ /g,"_"))
    console.log(eventDetails?.event.map(e=>e.strFilename));
    
    
    //fix the map
return(
    <>
    
    <h1>{eventDetails?.event.map(match => match.strFilename)}</h1>
    </>
)
}


export default EventDetails