import type { TableProps } from "antd";
import { useRecoilValue } from "recoil";
import useSearchLeague from "../hooks/useSearchLeague";
import searchedLeagueValue from "../recoil/selector/SearchedLeagueValue";
import FilterdYearValue from "../recoil/selector/FilterdYearValue";
import isSelectedLeagueaValue from "../recoil/selector/isSelectedLeagueValue";
import isSelectedYearValue from "../recoil/selector/isSelectedYearValue";

const useTableStanding = () => {
  const searchedValue = useRecoilValue(searchedLeagueValue);
  const yearValue = useRecoilValue(FilterdYearValue);
  const selectedLeagueStatus = useRecoilValue(isSelectedLeagueaValue);
  const selectedYearStatus = useRecoilValue(isSelectedYearValue);
  console.log(searchedValue);

  const {
    data: league,
    isError,
    error,
    refetch,
    isLoading,
  } = useSearchLeague(Number(searchedValue[0]?.idLeague), yearValue[0]?.value);

  if(isError){
    <h1>{error.message}</h1>
  }

  if (selectedLeagueStatus || selectedYearStatus) {
    refetch();
  }

  const leagueName = Array.isArray(league?.table) && league.table.length > 0 
  ? league.table[0].strLeague 
  : '';

  const leagueSize: number = league?.table?.length || 0;

  const secondLeagueOfCountry= league?.table[0].strLeague.includes("2") ||
  league?.table[0].strLeague.includes("B") || league?.table[0].strLeague=='English League Championship'



  const columns: TableProps["columns"] = [
    {
      title: "Team",
      dataIndex: "strTeam",
      key: "strTeam",
      render: (teamName: string, record: any) => (
        <div
          className={`flex items-center ${
            !secondLeagueOfCountry &&
              record.intRank >= 1 &&
              record.intRank <= 4 &&
              "border-l-2 border-green-500" ||
              secondLeagueOfCountry &&
              record.intRank >= 1 &&
              record.intRank <= 2 &&
              "border-l-2 border-green-500"
          } ${
            !secondLeagueOfCountry  &&
            record.intRank == 5 &&
            "border-l-2 border-orange-400" ||
            secondLeagueOfCountry  &&
            record.intRank >= 3 &&
            record.intRank <= 5 &&
            "border-l-2 border-orange-400"
          }
          ${
            record.intRank <= leagueSize &&
            record.intRank >= leagueSize - 2 &&
            "border-l-2 border-red-600"
          }`}
        >
          <span className="ml-2">{record.intRank} .</span>
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
    {
      title: "Form",
      dataIndex: "strForm",
      key: "strForm",
      render: (form: string) => <CircleForm form={form} />,
    },
  ];

  const CircleForm = ({ form }: { form: string }) => {
    const formArray = form.split("").reverse();
    const circleSize = 24;

    return (
      <>
        <div className="flex flex-row justify-center items-center mr-12">
          {formArray.map((char) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: circleSize,
                height: circleSize,
                borderRadius: "50%",
                border: "1px solid #ddd",
                overflow: "hidden",
              }}
            >
              <span
                className={`w-full p-1 text-white ${
                  char == "W" && "bg-green-600"
                } ${char == "L" && "bg-red-700 p-2"}
                ${char == "D" && "bg-gray-400 p-1.5"}`}
              >
                {char}
              </span>
            </div>
          ))}
        </div>
      </>
    );
  };

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
        strTeamBadge: team.strBadge,
        intRank: team.intRank,
        strForm: team.strForm,
      }))) ||
    [];

    // const responsiveProps = {
    //   bordered: true,
    //   size: "small",
    //   pagination: false,
    //   scroll: { x: 1500 },
    //   columns: columns,
    //   dataSource: data,
    //   responsive: {
    //     columnWidth: 150,
    //     minColumnWidth: 100,
    //     maxColumnWidth: 200,
    //     onBreakpointChange: (breakpoint:number, columnWidths:number) => {
    //       console.log("Breakpoint changed:", breakpoint);
    //       console.log("Column widths:", columnWidths);
    //     },
    //   },
    // };

  return { columns, data, leagueName, isLoading , isError , error  };
};

export default useTableStanding;
