import { Table } from "antd";
import SearchLeague from "./components/SearchLeague";
import useTableStanding from "./hooks/useTableStanding";
import FilterYear from "./components/FilterYear";

function App() {
  const { columns, data } = useTableStanding();
  return (
    <>
      <div className="sm:grid grid-cols-3 m-4">
        <SearchLeague />
        <FilterYear />
      </div>

      <Table columns={columns} dataSource={data} />
    </>
  );
}

export default App;
