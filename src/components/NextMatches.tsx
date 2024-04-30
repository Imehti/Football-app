import { useRecoilValue } from "recoil";
import useNextMatches from "../hooks/useNextMatches";
import searchedLeagueValue from "../recoil/selector/SearchedLeagueValue";
import useTableStanding from "./TableStanding";
import isSelectedLeagueaValue from "../recoil/selector/isSelectedLeagueValue";

function NextMatches() {
  const leagueSearchedValue = useRecoilValue(searchedLeagueValue);
  const {data:tableDetails} = useTableStanding()
  const maxPlayed = Math.max(...tableDetails.map((team) => team.intPlayed));
  const { data: nextEvents ,refetch } = useNextMatches(Number(leagueSearchedValue[0]?.idLeague),maxPlayed);
  const selectedLeagueStatus = useRecoilValue(isSelectedLeagueaValue);

  
if(selectedLeagueStatus){
  refetch()
}
  
  

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
                  <img
                    className="w-8 h-8"
                    src={event.strHomeTeamBadge}
                    alt={event.strHomeTeam}
                  />
                  <span className="ml-1">{event.strHomeTeam}</span>
                </div>
                <div>
                  <span>{event.dateEvent}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex mt-2">
                  <img
                    className="w-8 h-8"
                    src={event.strAwayTeamBadge}
                    alt={event.strAwayTeam}
                  />
                  <span className="ml-1">{event.strAwayTeam}</span>
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
