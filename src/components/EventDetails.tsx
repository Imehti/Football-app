import { useRecoilState, useRecoilValue } from "recoil";
import FileNameValue from "../recoil/selector/FileNameValue";
import useEventDetails from "../hooks/useEventDetails";
import selectedEventStatus from "../recoil/selector/SelectedEventStatus";
import Loading from "./Loading";


function EventDetails() {
  const fileName = useRecoilValue(FileNameValue);
  

  const { data: eventDetails , refetch , isLoading} = useEventDetails(fileName.replace(/ /g, "_"));
  const selectedEvent=useRecoilValue(selectedEventStatus)



if(selectedEvent){
    refetch()

}
  
  
  return (
    <>
    {isLoading && <Loading />}
      <h1>{eventDetails?.event.map((match) => match.strFilename)}</h1>
      <img src={eventDetails?.event.map((e) => e.strMap).join()} alt="" />
    </>
  );
}

export default EventDetails;
