import useEventDetails from "../hooks/useEventDetails";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

function EventDetails() {
  const params = useParams();
  const { data: eventDetails, isLoading } = useEventDetails(params.eventName);


  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {eventDetails && (
        <>
          <div className="flex justify-center mt-8 p-2">
          <img src={eventDetails.event.map((e) => e.strBanner).join()} alt="" />
          </div>
          <div className="flex justify-center items-center mt-4 border bg-blue-200">
          <h1 className="font-bold sm:text-2xl">{eventDetails.event.map((e) => e.strEvent).join()}</h1>
          </div>
        </>
      )}
    </>
  );
}

export default EventDetails;
