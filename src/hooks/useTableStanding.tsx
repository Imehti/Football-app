import type { TableProps } from "antd";
import { useRecoilValue } from "recoil";
import useSearchLeague from "./useSearchLeague";
import searchedLeagueValue from "../recoil/selector/SearchedLeagueValue";
import FilterdYearValue from "../recoil/selector/FilterdYearValue";

const useTableStanding = () => {
  const searchedValue = useRecoilValue(searchedLeagueValue);
  const yearValue= useRecoilValue(FilterdYearValue)
  
  
  const {
    data: league,
    isError,
    error,
  } = useSearchLeague(Number(searchedValue[0]?.idLeague),(yearValue[0]?.value));

 
 

  const columns: TableProps["columns"] = [
    {
      title: "Team",
      dataIndex: "strTeam",
      key: "strTeam",
      render: (teamName: string, record: any) => (
        <div className="flex items-center">
          <span>{record.intRank} .</span>
          <img
            className="ml-1"
            src={record.strTeamBadge}
            alt={teamName}
            style={{ width: "32px", height: "32px", verticalAlign: "middle" }}
          />
          <span className="ml-2">{teamName}</span>
        </div>
      ),
    },
    {
      title: "GP",
      dataIndex: "intPlayed",
      key: "intPlayed",
    },
    {
      title: "W",
      dataIndex: "intWin",
      key: "intWin",
    },
    {
      title: "D",
      dataIndex: "intDraw",
      key: "intDraw",
    },
    {
      title: "L",
      dataIndex: "intLoss",
      key: "intLoss",
    },
    {
      title: "GF",
      dataIndex: "intGoalsFor",
      key: "intGoalsFor",
    },
    {
      title: "GA",
      dataIndex: "intGoalsAgainst",
      key: "intGoalsAgainst",
    },
    {
      title: "GD",
      dataIndex: "intGoalDifference",
      key: "intGoalDifference",
    },
    {
      title: "PTS",
      dataIndex: "intPoints",
      key: "intPoints",
    },
  ];

  const data =
    (!isError &&
      league?.table?.map((team) => ({
        key: team.idTeam,
        strTeam: team.strTeam,
        intPlayed: team.intPlayed,
        intWin: team.intWin,
        intDraw: team.intDraw,
        intLoss: team.intLoss,
        intGoalsFor: team.intGoalsFor,
        intGoalsAgainst: team.intGoalsAgainst,
        intGoalDifference: team.intGoalDifference,
        intPoints: team.intPoints,
        strTeamBadge: team.strTeamBadge,
        intRank: team.intRank,
      }))) ||
    [];

  return { columns, data };
};

export default useTableStanding;
