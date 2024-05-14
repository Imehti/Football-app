import useEventDetails from "../hooks/useEventDetails";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

function EventDetails() {
  const params = useParams();
  const { data: eventDetails, isLoading } = useEventDetails(params.eventName);
  console.log(eventDetails);

  const videoUrl = eventDetails?.event.find((e) => e.strVideo)?.strVideo;


  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {eventDetails && (
        <>
          <div className="flex justify-center mt-4">
            <img
              className="rounded-xl sm:size-2/4"
              src={eventDetails.event.map((e) => e.strThumb).join()}
              alt=""
            />
          </div>
          <div className="flex flex-col mt-2 border bg-blue-200">
            <div className="flex justify-center">
              <h1 className="font-bold sm:text-2xl">
                {eventDetails.event.map((e) => e.strEvent)}
              </h1>
            </div>
            <div className="flex justify-center items-center">
            <h1 className="font-bold sm:text-2xl">
                {eventDetails.event.map((e) => {return <div className="flex justify-between">{e.intHomeScore} : {e.intAwayScore}</div>})}
              </h1>
            </div>
            <div className="m-2 grid grid-cols-1 sm:grid-cols-2">
            <div>
            <h1 className="font-bold">
                Season : {eventDetails.event.map((e) => e.strSeason)}
              </h1>
              <h1 className="font-bold">
                Week : {eventDetails.event.map((e) => e.intRound)}
              </h1>
              <h1 className="font-bold">
                On : {eventDetails.event.map((e) => {return <span>''{e.dateEvent}'' {e.strTime}</span>})} 
              </h1>
              {eventDetails.event?.some((e) => e.strVenue !== null) &&  <h1 className="font-bold">
                  Stadium : {eventDetails.event.find((e) => e.strVenue !== null)?.strVenue} 
                  </h1> }
              {eventDetails.event?.some((e) => e.intSpectators !== null) &&  <h1 className="font-bold">
                  Spectators : {eventDetails.event.find((e) => e.intSpectators !== null)?.intSpectators} 
                  </h1> }
                {eventDetails.event.some((e) => e.strDescriptionEN !== "" && e.strDescriptionEN !== null) &&  <h1 className="font-bold">
                  Description : {eventDetails.event.find((e) => e.strDescriptionEN !== "")?.strDescriptionEN} 
                  </h1> }
            </div>
              {videoUrl && <video src={videoUrl} controls></video>}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default EventDetails;
