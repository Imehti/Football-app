import { useRecoilValue } from "recoil";
import useNextMatches from "../hooks/useNextMatches";
import searchedLeagueValue from "../recoil/selector/SearchedLeagueValue";
import useTableStanding from "./TableStanding";
import isSelectedLeagueaValue from "../recoil/selector/isSelectedLeagueValue";
import FilterdYearValue from "../recoil/selector/FilterdYearValue";
import isSelectedYearValue from "../recoil/selector/isSelectedYearValue";
import FilterRound from "./FilterRound";
import FilterdRoundValue from "../recoil/selector/FilterRoundValue";

function NextMatches() {
  const leagueSearchedValue = useRecoilValue(searchedLeagueValue);
  const yearValue = useRecoilValue(FilterdYearValue);
  const selectedLeagueStatus = useRecoilValue(isSelectedLeagueaValue);
  const selectedYearStatus = useRecoilValue(isSelectedYearValue);
  const roundValue = useRecoilValue(FilterdRoundValue);

  const { data: tableDetails } = useTableStanding();
  const maxPlayed = Math.max(...tableDetails.map((team) => team.intPlayed));
  const { data: nextEvents, refetch } = useNextMatches(
    Number(leagueSearchedValue[0]?.idLeague),
    maxPlayed,
    yearValue[0]?.value
  );

  if (selectedLeagueStatus || selectedYearStatus) {
    refetch();
  }

  console.log(nextEvents?.events);

  return (
    <>
      <div className="grid grid-cols-2 m-2 items-center font-bold">
        <FilterRound />
        {yearValue[0]?.value == "2023-2024" ? (
          <h1>NEXT EVENTS</h1>
        ) : (
          <h1> EVENTS</h1>
        )}
      </div>
      <div className="grid sm:grid-cols-5 grid-cols-2 gap-8 m-4">
        {nextEvents?.events &&
          nextEvents.events.some(
            (event) =>
              event.strStatus !== null && event.strStatus !== "Match Finished"
          ) &&
          nextEvents?.events.map((event) => (
            <>
  
               <div className={`relative ${event.strLeague!=='English Premier League'?'border border-gray-400 rounded-lg':''} `}>
                <img
                  className="aspect-square rounded-lg object-fill"
                  src={event.strSquare?event.strSquare : event.strThumb}
                  alt=""
                />
                   <div className="bottom-5 left-5 bot absolute">
                  <span className="text-black font-bold">{event.dateEvent}</span>
                </div>
                <div className="bottom-5 right-5 bot absolute">
                  <span className="text-black font-bold">
                    {event.strTime}
                  </span>
                </div>
               
              </div>
            </>
          ))}
      </div>
      <div className="flex justify-center mb-2">
        {!nextEvents?.events && (
          <h1 className="font-bold text-red-700">
            Please Select Season From 2012-2013
          </h1>
        )}
      </div>
      <div className="grid sm:grid-cols-5 grid-cols-2 gap-12 m-2">
        {nextEvents?.events &&
          nextEvents.events.some(
            (event) =>
              event.strStatus === null || event.strStatus === "Match Finished"
          ) &&
          nextEvents?.events.map((e) => (
            <>
                          <div className="border border-gray-500 flex flex-col rounded p-2">
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex justify-center items-center">
                    <img
                      className="w-8 h-8"
                      src={e.strHomeTeamBadge}
                      alt={e.strHomeTeam}
                    />
                    <span className="ml-1">{e.strHomeTeam}</span>
                  </div>
                  <div>
                    <span>{e.intHomeScore}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="flex mt-2 justify-center items-center">
                    <img
                      className="w-8 h-8"
                      src={e.strAwayTeamBadge}
                      alt={e.strAwayTeam}
                    />
                    <span className="ml-1">{e.strAwayTeam}</span>
                  </div>
                    <span>{e.intAwayScore}</span>
                  <div>
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
