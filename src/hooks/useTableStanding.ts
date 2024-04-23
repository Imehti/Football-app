
import type { TableProps } from "antd";

interface DataType {
  key: string;
  strTeam: string;
  intPlayed: number;
  intWin: number;
  intDraw: number;
  intLoss: number;
  intGoalsFor: number;
  intGoalsAgaints: number;
  intGoalDifference: number;
  intPoints: number;
}

const useTableStanding=()=>{

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Team",
    dataIndex: "strTeam",
    key: "strTeam",

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
    dataIndex: "intGoalsAgaints",
    key: "intGoalsAgaints",
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

const data: DataType[] = [
  {
    key: "1",
    strTeam: "John Brown",
    intPlayed: 32,
    intWin: 3,
    intDraw: 5,
    intLoss: 12,
    intGoalsFor: 12,
    intGoalsAgaints: 13,
    intGoalDifference: 12,
    intPoints: 13,
  },
  {
    key: "1",
    strTeam: "John Brown",
    intPlayed: 32,
    intWin: 3,
    intDraw: 5,
    intLoss: 12,
    intGoalsFor: 12,
    intGoalsAgaints: 13,
    intGoalDifference: 12,
    intPoints: 13,
  },
  {
    key: "1",
    strTeam: "John Brown",
    intPlayed: 32,
    intWin: 3,
    intDraw: 5,
    intLoss: 12,
    intGoalsFor: 12,
    intGoalsAgaints: 13,
    intGoalDifference: 12,
    intPoints: 13,
  },
  {
    key: "1",
    strTeam: "John Brown",
    intPlayed: 32,
    intWin: 3,
    intDraw: 5,
    intLoss: 12,
    intGoalsFor: 12,
    intGoalsAgaints: 13,
    intGoalDifference: 12,
    intPoints: 13,
  },
  {
    key: "1",
    strTeam: "John Brown",
    intPlayed: 32,
    intWin: 3,
    intDraw: 5,
    intLoss: 12,
    intGoalsFor: 12,
    intGoalsAgaints: 13,
    intGoalDifference: 12,
    intPoints: 13,
  },
];

return {columns , data}
}

export default useTableStanding

