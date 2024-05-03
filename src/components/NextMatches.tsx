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
    yearValue[0]?.value,
    Number(roundValue.map((round) => round.value).join())
  );

  if (selectedLeagueStatus || selectedYearStatus) {
    refetch();
  }

  console.log(roundValue);

  return (
    <>
      <div className="grid grid-cols-2 m-2 items-center font-bold">
        <FilterRound />
        {yearValue[0]?.value == "2023-2024" ? (
          <div>
            {" "}
            <h1>NEXT EVENTS Round </h1>
            <span>{roundValue?.map((round) => round.value).join()}</span>
          </div>
        ) : (
          <div className="flex">
            <h1 className="mr-3 italic"> EVENTS</h1>
            {roundValue?.length !== 0 ? (
              <h2 className="italic">
                {" "}
                Round {roundValue?.map((round) => round.value).join()}
              </h2>
            ) : (
              <h2 className="italic">Round {maxPlayed === 38 ? maxPlayed : maxPlayed + 1}</h2>
            )}
          </div>
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
              <div
                className={`relative ${
                  event.strLeague !== "English Premier League"
                    ? "border border-gray-400 rounded-lg"
                    : ""
                } `}
              >
                <img
                  className="aspect-square rounded-lg object-fill"
                  src={event.strSquare ? event.strSquare : event.strThumb}
                  alt=""
                />
                <div className="bottom-5 left-5 bot absolute">
                  <span className="text-black font-bold">
                    {event.dateEvent}
                  </span>
                </div>
                <div className="bottom-5 right-5 bot absolute">
                  <span className="text-black font-bold">{event.strTime}</span>
                </div>
              </div>
            </>
          ))}
      </div>

      <div className="grid sm:grid-cols-5 grid-cols-2 gap-12 m-2">
        {nextEvents?.events &&
          nextEvents.events.some(
            (event) =>
              event.strStatus === null || event.strStatus === "Match Finished"
          ) &&
          nextEvents?.events.map((e) => (
            <div className="border border-gray-500 flex flex-row justify-between items-center rounded p-2">
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8"
                  src={
                    tableDetails.find((team) => team.strTeam === e.strHomeTeam)
                      ?.strTeamBadge
                  }
                  alt={e.strHomeTeam}
                />
                <span className="ml-1">{e.strHomeTeam}</span>
                <span>{e.intHomeScore}</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8"
                  src={
                    tableDetails.find((team) => team.strTeam === e.strAwayTeam)
                      ?.strTeamBadge
                  }
                  alt={e.strAwayTeam}
                />
                <span className="ml-1">{e.strAwayTeam}</span>
                <span>{e.intAwayScore}</span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default NextMatches;
