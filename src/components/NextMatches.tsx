import useNextMatches from "../hooks/useNextMatches";

function NextMatches() {
  const { data: nextEvents } = useNextMatches();

  console.log(nextEvents?.events.map((d) => d.strEvent));

  return (
    <>
    <div className="flex justify-center font-bold">
    <h1>NEXT EVENTS</h1>
    </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-8 m-4">
        {nextEvents?.events.map((event) => (
          <>
            {" "}
            <div className="border border-gray-500 flex flex-col rounded p-2">
              <div className="grid grid-cols-2 gap-8">
            <div className="flex">
            <img className="w-8 h-8" src={event.strHomeTeamBadge} alt={event.strHomeTeam}  />
                <span>{event.strHomeTeam}</span>
            </div>
               <div>
               <span>{event.dateEvent}</span>
               </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
            <div className="flex">
            <img className="w-8 h-8" src={event.strAwayTeamBadge} alt={event.strAwayTeam}  />
                <span>{event.strAwayTeam}</span>
            </div>
               <div>
               <span>{event.strTime}</span>
               </div>
              </div>
         
             
            </div>
            
          </>
        ))}
      </div>
    </>
  );
}

export default NextMatches;
