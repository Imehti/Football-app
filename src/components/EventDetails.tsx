
import useEventDetails from "../hooks/useEventDetails";
import Loading from "./Loading";
import { useParams } from "react-router-dom";



function EventDetails() {
//fileName.replace(/ /g, "_")
const params= useParams()
  const {
    data: eventDetails,
    isLoading,
  } = useEventDetails(params.eventName);
  // const selectedEvent = useRecoilValue(selectedEventStatus);
  console.log();
  

  // React.useEffect(() => {
  //   if (selectedEvent) {
  //     refetch();
  //   }
  // }, [selectedEvent, refetch]);

  return (
    <>
      {isLoading && <Loading />}
      {eventDetails && (
        <>
          <h1>{eventDetails.event.map((match) => match.strFilename)}</h1>
          <img src={eventDetails.event.map((e) => e.strBanner).join()} alt="" />
        </>
      )}
    </>
  );
}

export default EventDetails;
